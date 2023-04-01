'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshIcon } from 'components/icons';
import CodeBlock from 'components/code/code-block';

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
    <div className="not-prose flex h-full flex-col overflow-auto rounded-md md:h-96 md:flex-row">
      <div className="flex-shink flex flex-grow basis-64 flex-col justify-between bg-zinc-800 p-3 md:p-6">
        <motion.button
          type="button"
          className="flex w-fit cursor-pointer items-center justify-center rounded-full border-none bg-transparent p-2 text-zinc-400"
          onClick={onClickRefresh}
          whileHover={{ scale: 1.1 }}
        >
          <RefreshIcon />
        </motion.button>
        <ul className="flex h-72 flex-col justify-end space-y-4">
          <AnimatePresence>
            {items.map((item) => (
              <motion.li
                key={item}
                className="flex cursor-pointer items-center bg-zinc-900 p-3 text-sm shadow-sm "
                onClick={() => onClickItem(item)}
                layout
                exit={{ opacity: 0 }}
              >
                {item}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
      <CodeBlock codeString={exampleCode} language="jsx" />
    </div>
  );
};

export default SimpleList;
