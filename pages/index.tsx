import Head from "next/head";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Check My Knowledge</title>
        <meta
          name="description"
          content="Initial version of check my knowledge app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main>
        <div className="hero min-h-screen">
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
              <h1 className="text-4xl font-bold">
                Check your knowledge with an expert
              </h1>
              <p className="py-6">
                Chat GPT powered conversation with an expert on any subject
                simulator.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
