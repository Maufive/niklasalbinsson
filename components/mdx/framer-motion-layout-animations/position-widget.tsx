import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from 'components/code/code-block';
import Radio from 'components/input/radio-button';
import Switch from 'components/input/switch';
import styles from './position-widget.module.scss';

const ExampleWithLayout = `
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  position: 'start' | 'center' | 'end'
}

const PositionExample: React.FC<Props> = ({ position }) => (
  <motion.div  
    layout
    style={{ justifySelf: position }} 
  />
);
  
export default PositionExample;
`.trim();

const ExampleWithOutLayout = `
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  position: 'start' | 'center' | 'end'
}

const PositionExample: React.FC<Props> = ({ position }) => (
  <div
    style={{ justifySelf: position }} 
  />
);
  
export default PositionExample;
`.trim();

const PositionWidget: React.FC = () => {
  const [position, setPosition] = React.useState<string>('start');
  const [isLayout, setIsLayout] = React.useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.exampleWrapper}>
        <div className={styles.boxWrapper}>
          {isLayout ? (
            <motion.div
              layout={isLayout}
              className={styles.box}
              style={{ justifySelf: position }}
            />
          ) : (
            <div className={styles.box} style={{ justifySelf: position }} />
          )}
        </div>

        <div className={styles.widgetInputs}>
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
          <div>
            <Switch
              id="layout"
              label="Enable layout animations"
              onChange={() => setIsLayout((prev) => !prev)}
              toggled={isLayout}
            />
          </div>
        </div>
      </div>
      <CodeBlock
        codeString={isLayout ? ExampleWithLayout : ExampleWithOutLayout}
        language="jsx"
      />
    </div>
  );
};

export default PositionWidget;
