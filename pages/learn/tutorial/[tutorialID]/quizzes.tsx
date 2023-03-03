import React, { useEffect } from "react";
import Quizz from "@/components/Quizz";
import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QuizzT } from "@/entities/Quizz";
import QuizzBottomNav from "@/components/QuizzBottomNav";

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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const markdown = `
  {
      "question": "What is useEffect?",
      "answers": [
          "A React hook that allows you to perform side effects in function components",
          "A React hook that allows you to perform side effects in class components",
          "A React hook that allows you to perform side effects in both function and class components",
          "A React hook that allows you to perform side effects in neither function nor class components"
      ],
      "correctAnswer": "A React hook that allows you to perform side effects in function components"
  }
  
  %quiz
  {
      "question": "What is the first argument of useEffect?",
      "answers": [
          "The function that is called after the component is rendered for the first time",
          "The function that is called before the component is removed from the DOM",
          "The function that is called after the component is rendered for the first time and before the component is removed from the DOM",
          "The function that is called after the component is rendered for the first time or before the component is removed from the DOM"
      ],
      "correctAnswer": "The function that is called after the component is rendered for the first time"
  }`;

  const quizzes = separateQuizzes(markdown);
  console.log(quizzes[1]);
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

const separateQuizzes = (markdown: string) => {
  const quizzes = markdown.split("%quiz");
  return quizzes;
};

const getCorrectAnswerIndex = (answers: string[], correctAnswer: string) => {
  const correctAnswerIndex = answers.indexOf(correctAnswer);
  return correctAnswerIndex;
};

const strArrToObjArr = (strArr: string[]) => {
  const objArr = strArr.map((str) => JSON.parse(str));
  return objArr;
};
