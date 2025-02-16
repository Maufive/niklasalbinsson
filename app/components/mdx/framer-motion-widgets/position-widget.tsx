"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@/app/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "app/components/ui/radio-group";
import { Label } from "@/app/components/ui/label";
import { Code } from "../code";

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
  const [showCode, setShowCode] = React.useState<boolean>(false);

  return (
    <div className="not-prose flex flex-col overflow-auto rounded-md">
      <motion.div
        className="flex flex-col p-3 md:p-6 relative"
        style={{
          background: "linear-gradient(90deg, #4776e6 0%, #8e54e9 100%)",
        }}
        animate={{
          borderBottomRightRadius: showCode ? "0px" : "12px",
          borderBottomLeftRadius: showCode ? "0px" : "12px",
        }}
      >
        <motion.button
          className="mb-4 w-fit rounded-md bg-zinc-50 px-2 py-1 text-xs text-zinc-800 shadow-md"
          type="button"
          onClick={() => setShowCode(!showCode)}
          whileHover={{ scale: 1.05 }}
        >
          {showCode ? "Hide code" : "Show code"}
        </motion.button>

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
              className="flex items-center text-zinc-50"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="start"
                  id="start"
                  className="border-zinc-50 text-zinc-50"
                />
                <Label htmlFor="start" className="text-zinc-50">
                  Start
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="center"
                  id="center"
                  className="border-zinc-50 text-zinc-50"
                />
                <Label htmlFor="center" className="text-zinc-50">
                  Center
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="end"
                  id="end"
                  className="border-zinc-50 text-zinc-50"
                />
                <Label htmlFor="end" className="text-zinc-50">
                  End
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <Switch
                id="layout"
                onCheckedChange={(value) => setIsLayout(value)}
                checked={isLayout}
                className="data-[state=unchecked]:bg-zinc-400 data-[state=checked]:bg-zinc-50"
              />
              <Label htmlFor="layout" className="text-zinc-50">
                Enable layout animations
              </Label>
            </div>
          </div>
        </div>
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
              <Code>{isLayout ? ExampleWithLayout : ExampleWithOutLayout}</Code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PositionWidget;
