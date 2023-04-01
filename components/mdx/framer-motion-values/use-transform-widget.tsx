'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import CodeBlock from 'components/code/code-block';

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
  const [currentColor, setCurrentColor] = useState('rgba(236, 111, 102, 1)');
  const [showCode, setShowCode] = useState(false);

  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    'linear-gradient(90deg, #ec6f66 0%, #f3a183 100%)',
    'linear-gradient(90deg, #4776e6 0%, #8e54e9 100%)',
    'linear-gradient(90deg, #f09819 0%, #edde5d 100%)',
  ]);

  const colorOutput = ['#f3a183', '#8e54e9', '#edde5d'];
  const color = useTransform(x, xInput, colorOutput);

  useEffect(
    () =>
      color.onChange((update) => {
        setCurrentColor(update);
      }),
    [color]
  );

  return (
    <motion.div className="not-prose flex flex-col overflow-auto rounded-t-xl">
      <motion.div
        className="relative h-36 w-full p-2"
        style={{ background }}
        animate={{
          borderBottomRightRadius: showCode ? '0px' : '12px',
          borderBottomLeftRadius: showCode ? '0px' : '12px',
        }}
      >
        <motion.button
          className="rounded-md bg-zinc-50 px-2 py-1 text-xs text-zinc-800 shadow-md"
          type="button"
          onClick={() => setShowCode(!showCode)}
          whileHover={{ scale: 1.05 }}
        >
          {showCode ? 'Hide code' : 'Show code'}
        </motion.button>
        <motion.div
          className="basic-drag-example__box-wrapper absolute flex cursor-pointer items-center justify-center rounded-lg bg-zinc-50 shadow-lg"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.p className="text-sm" style={{ color }}>
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
            <CodeBlock codeString={CODE_STRING} language="jsx" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UseTransformWidget;
