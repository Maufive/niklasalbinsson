import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from 'components/code/code-block';
import Radio from 'components/input/radio-button/radio';
import styles from './flexbox-widget.module.scss';

const exampleCode = `
import React from 'react';
import { motion } from 'framer-motion';


const FlexboxExample: React.FC = () => (
  <div style={{ justifyContent: position }}>
    <motion.div layout className={styles.box} />
  </div>
)
  
  export default FlexboxExample;
`.trim();

const FlexboxWidget: React.FC = () => {
  const [position, setPosition] = React.useState<string>('start');

  return (
    <div className={styles.container}>
      <div className={styles.exampleWrapper}>
        <div className={styles.boxWrapper}>
          <motion.div
            layout
            className={styles.box}
            style={{ justifySelf: position }}
          />
        </div>

        <div className={styles.radioGroup}>
          <Radio.Group
            name="positions"
            onChange={(event) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              setPosition(event.target.value);
            }}
          >
            <Radio.Item
              id="position-1"
              value="start"
              aria-label="Start"
              label="Start"
              checked={position === 'start'}
            />
            <Radio.Item
              id="position-2"
              value="center"
              aria-label="Center"
              label="Center"
              checked={position === 'center'}
            />
            <Radio.Item
              id="position-3"
              value="end"
              aria-label="End"
              label="End"
              checked={position === 'end'}
            />
          </Radio.Group>
        </div>
      </div>
      <CodeBlock codeString={exampleCode} language="jsx" />
    </div>
  );
};

export default FlexboxWidget;
