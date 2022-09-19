import { useSpring, useScroll } from 'framer-motion';

const useProgress = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  return pathLength;
};

export default useProgress;
