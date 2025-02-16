"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedTitleProps {
  text: string;
}

export default function AnimatedTitle({ text }: AnimatedTitleProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getNeighborScale = (currentIndex: number) => {
    if (hoveredIndex === null) return 1;

    const distance = Math.abs(currentIndex - hoveredIndex);
    if (distance > 2) return 1;

    return 1 + (0.15 * (3 - distance)) / 3; // 1.15 for hovered, 1.1 for distance 1, 1.05 for distance 2
  };

  const getNeighborY = (currentIndex: number) => {
    if (hoveredIndex === null) return 0;

    const distance = Math.abs(currentIndex - hoveredIndex);
    if (distance > 2) return 0;

    return -3 * ((3 - distance) / 3); // -3px for hovered, -2px for distance 1, -1px for distance 2
  };

  return (
    <h1
      className="flex text-2xl font-semibold tracking-tighter relative"
      aria-label={text}
    >
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block origin-bottom"
            animate={{
              y: getNeighborY(index),
              scale: getNeighborScale(index),
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
