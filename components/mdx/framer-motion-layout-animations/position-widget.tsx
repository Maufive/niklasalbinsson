"use client";

import React from "react";
import { motion } from "framer-motion";
import CodeBlock from "components/code-block";
import { Switch } from "components/ui/switch";
import { RadioGroup, RadioGroupItem } from "components/ui/radio-group";
import { Label } from "components/ui/label";

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
  const [position, setPosition] = React.useState<string>("start");
  const [isLayout, setIsLayout] = React.useState<boolean>(false);

  return (
    <div className="not-prose flex flex-col overflow-auto rounded-md">
      <div className="flex flex-col bg-zinc-950 p-3 md:p-6">
        <div className="grid">
          {isLayout ? (
            <motion.div
              layout={isLayout}
              className="bg-primary h-20 w-20 rounded-md shadow-md"
              style={{ justifySelf: position }}
            />
          ) : (
            <div
              className="bg-primary h-20 w-20 rounded-md shadow-md"
              style={{ justifySelf: position }}
            />
          )}
        </div>

        <div className="mx-auto mt-6">
          <div className="mb-3 flex">
            <RadioGroup
              value={position}
              defaultValue="start"
              onValueChange={setPosition}
              className="flex items-center"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="start" id="start" />
                <Label htmlFor="start">Start</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="center" id="center" />
                <Label htmlFor="center">Center</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="end" id="end" />
                <Label htmlFor="end">End</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <Switch
                id="layout"
                onCheckedChange={(value) => setIsLayout(value)}
                checked={isLayout}
              />
              <Label htmlFor="layout">Enable layout animations</Label>
            </div>
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
