import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type UseScrollAnimationParams = {
  index?: number;
};

export const useScrollAnimation = ({ index }: UseScrollAnimationParams = {}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const delay = index !== undefined ? index * 0.1 : 0; 
  return { ref, controls, delay };
};
