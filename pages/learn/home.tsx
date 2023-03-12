import React from "react";
import Head from "next/head";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import TutorialCard from "@/components/TutorialCard";
import { useRouter } from "next/router";
import type { Tutorial } from "@/entities/Tutorial";
import { initializeSupabaseClient } from "@/helpers/provider";

const supabase = initializeSupabaseClient();

type Props = {
  tutorials: Tutorial[];
  locale: string;
};

const Home = ({ tutorials, locale }: Props) => {
  const { t } = useTranslation(["home", "common"]);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`Home - CaYoDis`}</title>
        <meta name="description" content="Home for CheckMyKnowledge app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main>
        <div className="divider py-4 text-lg">{t("explore_tutorials")}</div>
        <div className="carousel  carousel-center max-w-md py-16 p-4 space-x-8 bg-base-200 rounded-box md:max-w-full ">
          {tutorials.map((tutorial) => (
            <div
              className="carousel-item relative w-full md:w-max cursor-pointer"
              onClick={() =>
                router.push(`/learn/tutorial/${tutorial.tutorial_id}/slides`)
              }
              key={tutorial.tutorial_id}
            >
              <TutorialCard
                // @ts-ignore
                title={tutorial.name[locale]}
                // @ts-ignore
                description={tutorial.description[locale]}
                difficulty={tutorial.difficulty}
                points={tutorial.points}
                icon={tutorial.icon}
                code={tutorial.code}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const tutorials = await getTutorialsFromSupabaseTable();
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["home", "common"], null, [
        "en",
        "es",
      ])),
      tutorials,
      locale: locale || "en",
    },
  };
};

const getTutorialsFromSupabaseTable = async () => {
  let { data: tutorials, error } = await supabase.from("tutorials").select("*");
  if (error) {
    console.error(error);
  }
  return tutorials;
};
