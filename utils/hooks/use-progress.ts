import { useSpring, useViewportScroll } from 'framer-motion';

const useProgress = () => {
  const { scrollYProgress } = useViewportScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  return pathLength;
};

export default useProgress;
