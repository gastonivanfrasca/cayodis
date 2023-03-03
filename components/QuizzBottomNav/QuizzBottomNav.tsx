import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Image from "next/image";

type Props = {
  selectedAnswer: number;
  indexCorrectAnswer: number;
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
};

const QuizzBottomNav = (props: Props) => {
  const { selectedAnswer, indexCorrectAnswer, setCurrentIndex, currentIndex } =
    props;
  const [chatVisible, setChatVisible] = React.useState(false);

  useEffect(() => {
    if (chatVisible) {
      setTimeout(() => {
        setChatVisible(false);
      }, 2000);
    }
  }, [chatVisible]);

  const handleClick = () => {
    if (selectedAnswer === indexCorrectAnswer) {
      setCurrentIndex(currentIndex + 1);
      setChatVisible(true);
    }
  };
  return (
    <>
      {chatVisible && <ChatBubble />}
      <div className="btm-nav bg-base-200">
        <div>
          <button>
            <div
              className="radial-progress"
              style={{ "--value": 70, "--size": "2.5rem" }}
            >
              <p className="text-xs">70%</p>
            </div>
          </button>
        </div>
        <div>⚡ {100}</div>
        <button className="flex hover:bg-base-300" onClick={handleClick}>
          <AiFillCheckCircle className="text-green-600 text-xl" />
        </button>
      </div>
    </>
  );
};

const ChatBubble = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image
            src="/favicon/android-chrome-192x192.png"
            alt="chatbot image"
          />
        </div>
      </div>
      <div className="chat-bubble">Great the answer is correct!</div>
    </div>
  );
};

export default QuizzBottomNav;
