import Head from "next/head";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import { FcGoogle } from "react-icons/fc";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { signInWithGoogle } from "@/helpers/auth";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const supabaseClient = useSupabaseClient();
  const { t } = useTranslation("index");
  return (
    <>
      <Head>
        <title>CaYoDis</title>
        <meta name="description" content="Initial version of CaYoDis app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main>
        <div className="hero mt-8 sm:mt-6 md:mt-24">
          <div className="hero-content flex-col lg:flex-row">
            <LottieAnimation
              id="conversation"
              autoplay={true}
              loop={true}
              mode={"normal"}
              src={
                "https://assets1.lottiefiles.com/packages/lf20_xgvucffc.json"
              }
              width="250px"
              height="250px"
            />
            <div>
              <h1 className="text-4xl font-bold">{t("slogan")}</h1>
              <p className="py-6">{t("description")}</p>
              <button
                className="btn btn-md lg:btn-lg"
                onClick={() =>
                  signInWithGoogle(supabaseClient)
                    .then()
                    .catch(() => window.location.assign("/500"))
                }
              >
                <FcGoogle />
                <span className="ml-2">{t("sign_in_with_google")}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "index"], null, [
        "en",
        "es",
      ])),
    },
  };
};
