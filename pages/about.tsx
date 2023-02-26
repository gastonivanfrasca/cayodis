import React from "react";
import Head from "next/head";
import { Genos } from "@next/font/google";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const genos = Genos({
  subsets: ["latin"],
  variable: "--font-genos",
});

const About = () => {
  const { t } = useTranslation(["common", "about"]);
  return (
    <>
      <Head>
        <title>{`${t("about")} - CaYoDis`}</title>
        <meta name="description" content="Credits for CheckMyKnowledge app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div className="hero min-h-screen bg-base-400">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className={`${genos.variable} font-mono text-5xl font-bold`}>
              CaYoDis
            </h1>
            <p className="py-6">{t("description", { ns: "about" })}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "about"], null, [
        "en",
        "es",
      ])),
    },
  };
};
