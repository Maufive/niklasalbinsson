"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCcw } from "lucide-react";
import { Code } from "../code";

const exampleCode = `
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_STATE = [
    'Apples 🍎',
    'Bread 🥖',
    'Cheese 🧀',
    'Eggs 🥚',
    'Cookies 🍪',
  ];

const SimpleList: React.FC = () => {
    const [items, setItems] = React.useState(INITIAL_STATE);
  
    const onClickItem = (task: string) => {
      setItems(items.filter((item) => item !== task));
    };
  
    const onClickRefresh = () => {
      setItems(INITIAL_STATE);
    };
  
    return (
        <ul>
            <AnimatePresence>
                {items.map((item) => (
                    <motion.li
                        key={item}
                        onClick={() => onClickItem(item)}
                        layout
                        exit={{ opacity: 0 }}
                    >
                        {item}
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    );
  };
  
  export default SimpleList;
`.trim();

const INITIAL_STATE = ["Apples 🍎", "Bread 🥖", "Cheese 🧀", "Eggs 🥚", "Cookies 🍪"];

const SimpleListWidget: React.FC = () => {
  const [items, setItems] = React.useState(INITIAL_STATE);
  const [showCode, setShowCode] = React.useState(false);

  const onClickItem = (task: string) => {
    setItems(items.filter((item) => item !== task));
  };

  const onClickRefresh = () => {
    setItems(INITIAL_STATE);
  };

  return (
    <div className="not-prose flex flex-col overflow-auto rounded-t-xl">
      <motion.div
        className="relative h-[400px] p-3 md:p-6"
        style={{
          background: "linear-gradient(90deg, #4776e6 0%, #8e54e9 100%)",
        }}
        animate={{
          borderBottomRightRadius: showCode ? "0px" : "12px",
          borderBottomLeftRadius: showCode ? "0px" : "12px",
        }}
        transition={{ duration: 0.15 }}
      >
        <motion.button
          className="mb-4 w-fit rounded-md bg-zinc-50 px-2 py-1 text-xs text-zinc-800 shadow-md"
          type="button"
          onClick={() => setShowCode(!showCode)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.15 }}
        >
          {showCode ? "Hide code" : "Show code"}
        </motion.button>

        <div className="flex h-full flex-col">
          <motion.button
            type="button"
            className="flex w-fit cursor-pointer items-center justify-center rounded-full border-none bg-zinc-50 p-2 text-zinc-800"
            onClick={onClickRefresh}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.15 }}
          >
            <RefreshCcw />
          </motion.button>
          <ul className="mt-4 flex flex-1 flex-col space-y-4">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.li
                  key={item}
                  className="flex cursor-pointer items-center rounded-md bg-zinc-50/10 p-3 text-sm text-zinc-50 shadow-sm backdrop-blur-sm"
                  onClick={() => onClickItem(item)}
                  layout
                  layoutId={item}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.15 },
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 1,
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </motion.div>
      <AnimatePresence>
        {showCode && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <pre className="overflow-auto bg-zinc-950 px-4">
              <Code>{exampleCode}</Code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SimpleListWidget;
