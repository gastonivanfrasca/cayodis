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
        <title>About - ChMyKn</title>
        <meta name="description" content="Credits for CheckMyKnowledge app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div className="hero min-h-screen bg-base-400">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className={`${genos.variable} font-mono text-5xl font-bold`}>
              ChMyKn
            </h1>
            <p className="py-6">
              Check my knowledge sounded like a good portfolio project. The idea
              is experiment with prompting on conversational models, it's only intended to be a
              proof of concept.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
