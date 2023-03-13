import React, { useEffect } from "react";
import Quizz from "@/components/Quizz";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QuizzT } from "@/entities/Quizz";
import {
  separateQuizzes,
  strArrToObjArr,
  getCorrectAnswerIndex,
} from "@/helpers/quizzes";
import QuizzBottomNav from "@/components/QuizzBottomNav";
import { initializeSupabaseClient } from "@/helpers/provider";
import { getTutorialFromSupabaseTable } from "@/helpers/provider";

const supabase = initializeSupabaseClient();

type Props = {
  quizzes: string[];
};

const Quizzes = ({ quizzes }: Props) => {
  const [currentQuizzIndex, setCurrentQuizzIndex] = React.useState(0);
  const [currentQuizz, setCurrentQuizz] = React.useState(
    quizzes[0] as unknown as QuizzT
  );
  const [correctAnswerIndex, setCorrectAnswerIndex] = React.useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState(0);

  useEffect(() => {
    setCurrentQuizz(quizzes[currentQuizzIndex] as unknown as QuizzT);
    setCorrectAnswerIndex(
      getCorrectAnswerIndex(currentQuizz.answers, currentQuizz.correctAnswer)
    );
  }, [currentQuizzIndex]);

  return (
    <>
      <Quizz
        currentQuizz={currentQuizz}
        setSelectedAnswer={setSelectedAnswerIndex}
      />
      <QuizzBottomNav
        selectedAnswer={selectedAnswerIndex}
        indexCorrectAnswer={correctAnswerIndex}
        currentIndex={currentQuizzIndex}
        setCurrentIndex={setCurrentQuizzIndex}
      />
    </>
  );
};

export default Quizzes;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const tutorialID = params?.tutorialID as string;
  const lang = locale || "en";
  const tutorial = await getTutorialFromSupabaseTable(supabase, tutorialID);
  // @ts-ignore
  const markdownQuizzes = tutorial.quizzes[lang];
  const quizzes = separateQuizzes(markdownQuizzes);
  const quizzesArr = strArrToObjArr(quizzes);
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"], null, [
        "en",
        "es",
      ])),
      quizzes: quizzesArr,
    },
  };
};
