export const separateQuizzes = (markdown: string) => {
  const quizzes = markdown.split("%quiz");
  return quizzes;
};

export const getCorrectAnswerIndex = (
  answers: string[],
  correctAnswer: string
) => {
  const correctAnswerIndex = answers.indexOf(correctAnswer);
  return correctAnswerIndex;
};

export const strArrToObjArr = (strArr: string[]) => {
  const objArr = strArr.map((str) => JSON.parse(str));
  return objArr;
};
