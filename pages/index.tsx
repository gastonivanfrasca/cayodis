import Head from "next/head";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import { FcGoogle } from "react-icons/fc";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Home() {
  const supabaseClient = useSupabaseClient();

  async function signInWithGoogle() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
    });
  }

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
              <h1 className="text-4xl font-bold">
                Check your knowledge with an expert
              </h1>
              <p className="py-6">
                Chat GPT powered conversation with an expert on any subject
                simulator.
              </p>
              <button
                className="btn btn-md lg:btn-lg"
                onClick={() =>
                  signInWithGoogle()
                    .then()
                    .catch(() => window.location.assign("/500"))
                }
              >
                <FcGoogle />
                <span className="ml-2">Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
