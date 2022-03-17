import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshIcon } from 'components/icons';
import CodeBlock from 'components/code/code-block';
import styles from './simple-list-widget.module.scss';

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
    <div className={styles.container}>
      <div className={styles.exampleWrapper}>
        <motion.button
          type="button"
          className={styles.refreshButton}
          onClick={onClickRefresh}
          whileHover={{ scale: 1.1 }}
        >
          <RefreshIcon />
        </motion.button>
        <ul className={styles.list}>
          <AnimatePresence>
            {items.map((item) => (
              <motion.li
                key={item}
                className={styles.listItem}
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
