"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Code } from "../code";

const CODE_STRING = `
import { motion, useMotionValue, useTransform } from 'framer-motion';

const MyComponent = () => {
    const x = useMotionValue(0);
    const xInput = [-100, 0, 100];
    const background = useTransform(x, xInput, [
        'linear-gradient(90deg, #ec6f66 0%, #f3a183 100%)',
        'linear-gradient(90deg, #4776e6 0%, #8e54e9 100%)',
        'linear-gradient(90deg, #f09819 0%, #edde5d 100%)',
    ]);

    const colorOutput = ['#f3a183', '#8e54e9', '#edde5d'];
    const color = useTransform(x, xInput, colorOutput);

    return (
        <motion.div style={{ background }}>
            <motion.div
                style={{ x }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
            >
                <motion.p style={{ color }}>
                    {currentColor}
                </motion.p>
            </motion.div>
        </motion.div>
    )
}
`;

const UseTransformWidget = () => {
  const [currentColor, setCurrentColor] = useState("rgba(236, 111, 102, 1)");
  const [showCode, setShowCode] = useState(false);

  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(90deg, #ec6f66 0%, #f3a183 100%)",
    "linear-gradient(90deg, #4776e6 0%, #8e54e9 100%)",
    "linear-gradient(90deg, #f09819 0%, #edde5d 100%)",
  ]);

  const colorOutput = ["#f3a183", "#8e54e9", "#edde5d"];
  const color = useTransform(x, xInput, colorOutput);

  useEffect(
    () =>
      color.on("change", (update) => {
        setCurrentColor(update);
      }),
    [color],
  );

  return (
    <motion.div className="not-prose flex flex-col rounded-t-xl">
      <motion.div
        className="relative h-36 w-full p-2"
        style={{ background }}
        animate={{
          borderBottomRightRadius: showCode ? "0px" : "12px",
          borderBottomLeftRadius: showCode ? "0px" : "12px",
        }}
      >
        <motion.button
          className="rounded-md bg-zinc-50 px-2 py-1 text-xs text-zinc-800 shadow-md"
          type="button"
          onClick={() => setShowCode(!showCode)}
          whileHover={{ scale: 1.05 }}
        >
          {showCode ? "Hide code" : "Show code"}
        </motion.button>
        <motion.div
          className="absolute left-1/3 top-12 flex cursor-pointer items-center justify-center rounded-lg bg-zinc-50 shadow-lg"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.p className="text-sm p-4" style={{ color }}>
            {currentColor}
          </motion.p>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showCode && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <pre className="overflow-auto bg-zinc-950 px-4">
              <Code>{CODE_STRING}</Code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UseTransformWidget;
