import { motion } from "framer-motion";
import { minutesToPixels, formatTime } from "./utils";

interface TaskBlockProps {
  start: number;
  end: number;
}

export function TaskBlock({ start, end }: TaskBlockProps) {
  const springConfig = {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 1,
    restDelta: 0.5,
  };

  return (
    <motion.div
      className="absolute left-2 right-2 bg-blue-500/20 rounded-lg border border-blue-500/30"
      style={{
        top: minutesToPixels(start),
        height: minutesToPixels(end - start),
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        top: minutesToPixels(start),
        height: minutesToPixels(end - start),
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
        height: springConfig,
        top: springConfig,
      }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 p-2 text-xs sm:text-sm font-medium text-blue-400 whitespace-nowrap rounded-t-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {formatTime(start)} - {formatTime(end)}
      </motion.div>
    </motion.div>
  );
}
