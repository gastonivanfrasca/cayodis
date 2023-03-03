import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { useRouter } from "next/router";

type Props = {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  totalSlides: number;
  tutorialID: string;
};

const SlideBottomNav = (props: Props) => {
  const { currentSlide, setCurrentSlide, totalSlides, tutorialID } = props;
  const router = useRouter();
  return (
    <>
      <div className="btm-nav bg-base-200">
        {isFirstSlide(currentSlide) ? (
          <button
            className="disabled"
            tabIndex={-1}
            role="button"
            aria-disabled="true"
          >
            <AiOutlineArrowLeft />
          </button>
        ) : (
          <button onClick={() => setCurrentSlide(currentSlide - 1)}>
            <AiOutlineArrowLeft />
          </button>
        )}

        {isFirstSlide(currentSlide) ? (
          <button
            className="disabled"
            tabIndex={-1}
            role="button"
            aria-disabled="true"
          >
            <VscDebugRestart />
          </button>
        ) : (
          <button onClick={() => setCurrentSlide(0)}>
            <VscDebugRestart />
          </button>
        )}
        {isLastSlide(currentSlide, totalSlides) ? (
          <button
            onClick={() => router.push(`learn/tutorial/${tutorialID}/quizzes`)}
          >
            <RiCheckboxMultipleFill />
          </button>
        ) : (
          <button onClick={() => setCurrentSlide(currentSlide + 1)}>
            <AiOutlineArrowRight />
          </button>
        )}
      </div>
    </>
  );
};

const isFirstSlide = (currentSlide: number) => {
  return currentSlide === 0;
};

const isLastSlide = (currentSlide: number, totalSlides: number) => {
  return currentSlide === totalSlides - 1;
};

export default SlideBottomNav;
