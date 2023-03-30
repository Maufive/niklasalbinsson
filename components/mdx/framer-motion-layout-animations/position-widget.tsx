import React from 'react';
import { motion } from 'framer-motion';
import { RadioGroup } from '@headlessui/react';
import CodeBlock from 'components/code/code-block';
import Radio from 'components/input/radio-button';
import Switch from 'components/input/switch';

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
    <div className="not-prose flex flex-col overflow-auto rounded-md">
      <div className="flex flex-col bg-zinc-800 p-3 md:p-6">
        <div className="grid">
          {isLayout ? (
            <motion.div
              layout={isLayout}
              className="branded-gradient h-20 w-20 rounded-md shadow-md"
              style={{ justifySelf: position }}
            />
          ) : (
            <div
              className="branded-gradient h-20 w-20 rounded-md shadow-md"
              style={{ justifySelf: position }}
            />
          )}
        </div>

        <div className="mx-auto mt-6">
          <div className="mb-3 flex">
            <RadioGroup
              value={position}
              onChange={setPosition}
              className="flex items-center"
            >
              <RadioGroup.Label className="sr-only">Position</RadioGroup.Label>
              <Radio.Item value="start" label="Start" />
              <Radio.Item value="center" label="Center" />
              <Radio.Item value="end" label="End" />
            </RadioGroup>
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
