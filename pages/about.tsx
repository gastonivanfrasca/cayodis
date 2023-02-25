import React from "react";
import Head from "next/head";
import { Genos } from "@next/font/google";

const genos = Genos({
  subsets: ["latin"],
  variable: "--font-genos",
});

const About = () => {
  return (
    <>
      <Head>
        <title>About - CaYoDis</title>
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
            <p className="py-6">
              CaYoDis sounded like a good portfolio project. The idea is to
              create tutorials from what ive been and to use GPT like chats to
              generate content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
