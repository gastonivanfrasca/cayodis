import React from "react";
import Head from "next/head";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import TutorialCard from "@/components/TutorialCard";
import { useRouter } from "next/router";

const Home = () => {
  const { t } = useTranslation(["common"]);
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
        <div className="divider py-4 text-lg">Explore tutorials</div>
        <div className="carousel  carousel-center max-w-md py-16 p-4 space-x-8 bg-base-200 rounded-box  md:max-w-full ">
          <div
            className="carousel-item relative w-full md:w-max cursor-pointer"
            onClick={() => router.push("/learn/tutorial/1/slides")}
          >
            <TutorialCard
              title="Declaring a component"
              description="Component declaration is the base of React"
              difficulty="begginer"
              points={10}
              icon="react"
              code="<Component />"
            />
          </div>
          <div
            className="carousel-item relative w-full md:w-max cursor-pointer"
            onClick={() => router.push("/learn/tutorial/2/slides")}
          >
            <TutorialCard
              title="Declaring a component"
              description="Component declaration is the base of React"
              difficulty="begginer"
              points={10}
              icon="react"
              code="<Component />"
            />
          </div>
          <div className="carousel-item relative w-full md:w-max cursor-pointer">
            <TutorialCard
              title="Declaring a component"
              description="Component declaration is the base of React"
              difficulty="begginer"
              points={10}
              icon="react"
              code="<Component />"
            />
          </div>
          <div className="carousel-item relative w-full md:w-max cursor-pointer">
            <TutorialCard
              title="Declaring a component"
              description="Component declaration is the base of React"
              difficulty="begginer"
              points={10}
              icon="react"
              code="<Component />"
            />
          </div>
          <div className="carousel-item relative w-full md:w-max cursor-pointer">
            <TutorialCard
              title="Declaring a component"
              description="Component declaration is the base of React"
              difficulty="begginer"
              points={10}
              icon="react"
              code="<Component />"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"], null, [
        "en",
        "es",
      ])),
    },
  };
};
