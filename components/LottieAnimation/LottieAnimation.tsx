import { useRef, useEffect } from "react";

type LottieAnimationProps = {
  id: string;
  autoplay: boolean;
  loop: boolean;
  mode: string;
  src: string;
  width: string;
  height: string;
};

const LottieAnimation = (props: LottieAnimationProps) => {
  const { id, autoplay, loop, mode, src, width, height } = props;
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <lottie-player
      id={id}
      ref={ref}
      autoplay={autoplay}
      loop={loop}
      mode={mode}
      src={src}
      style={{ width: { width }, height: { height } }}
    />
  );
};

export default LottieAnimation;
