import TutorialSlide from "@/components/TutorialSlide/TutorialSlide";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Tutorial = () => {
  return <TutorialSlide />;
};

export default Tutorial;

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
