import { TutorialSlide, SlideBottomNav } from "@/components";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { separateSlides } from "@/helpers/slides";
import { useState } from "react";
import { initializeSupabaseClient } from "@/helpers/provider";
import type { Tutorial } from "@/entities/Tutorial";

const supabase = initializeSupabaseClient();

type Props = {
  slides: string[];
  tutorial: Tutorial;
  totalSlides: number;
};

const Slides = ({ slides, totalSlides, tutorial }: Props) => {
  const { tutorial_id } = tutorial;
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <TutorialSlide currentSlide={currentSlide} slides={slides} />
      <SlideBottomNav
        tutorialID={tutorial_id}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        totalSlides={totalSlides}
      />
    </>
  );
};

export default Slides;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const lang = locale || "en";
  const tutorialID = params?.tutorialID as string;
  const tutorial = await getTutorialFromSupabaseTable(tutorialID);
  // @ts-ignore
  const slideMarkdown = tutorial.slides[lang];
  const slides = separateSlides(slideMarkdown);
  const totalSlides = slides.length;

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"], null, [
        "en",
        "es",
      ])),
      totalSlides,
      slides,
      tutorial,
    },
  };
};

const getTutorialFromSupabaseTable = async (tutorialID: string) => {
  const { data, error } = await supabase
    .from("tutorials")
    .select("*")
    .eq("tutorial_id", tutorialID);
  if (error || !data) {
    console.error(error);
  }
  return data![0] as unknown as Tutorial;
};
