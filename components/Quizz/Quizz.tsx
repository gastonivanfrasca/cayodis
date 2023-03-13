import { v4 } from "uuid";

type Props = {
  currentQuizz: {
    question: string;
    answers: string[];
  };
  setSelectedAnswer: (answer: number) => void;
};

const Quizz = ({ currentQuizz, setSelectedAnswer }: Props) => {
  const { question, answers } = currentQuizz;
  return (
    <div className="mockup-window border border-base-200 md:max-w-lg container m-auto my-8 bg-base-300">
      <div className="justify-center px-4 py-4 border-t border-base-200">
        <p className="text-lg font-semibold mb-4">{question}</p>
        {answers.map((answer, index) => (
          <div className="form-control" key={v4()}>
            <label className="label cursor-pointer">
              <div className="flex justify-around">
                <span className="label-text">{answer}</span>
                <input
                  id={index.toString()}
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  onChange={(event) => {
                    setSelectedAnswer(parseInt(event.target.id));
                  }}
                />
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizz;
