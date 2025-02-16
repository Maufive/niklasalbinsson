"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon, RefreshCcw } from "lucide-react";
import { Switch } from "app/components/ui/switch";
import { Label } from "app/components/ui/label";
import { Badge } from "app/components/ui/badge";
import { Code } from "../code";

const exampleCodePositionLayout = `
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BadgesExample: React.FC = () => {
  return (
    <ul>
      <AnimatePresence mode="popLayout">
        {filters.map((filter) => (
          <motion.li
            key={filter}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 0.2 },
              layout: { type: "spring", bounce: 0.2 }
            }}
          >
            <Badge>
              <motion.div layout="position">
                <CloseButton />
                <span>{filter}</span>
              </motion.div>
            </Badge>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>     
  );
};

export default BadgesExample;
`.trim();

const exampleCodePositionLayoutOff = `
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BadgesExample: React.FC = () => {
  return (
    <ul>
      <AnimatePresence mode="popLayout">
        {filters.map((filter) => (
          <motion.li
            key={filter}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 0.2 },
              layout: { type: "spring", bounce: 0.2 }
            }}
          >
            <Badge>
              <div>
                <CloseButton />
                <span>{filter}</span>
              </div>
            </Badge>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};
  
export default BadgesExample;
`.trim();

const INITIAL_STATE = ["In Stock", "Free Shipping", "On Sale"];

const BadgesWidget: React.FC = () => {
  const [filters, setFilters] = React.useState(INITIAL_STATE);
  const [position, setPosition] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);

  const handleBadgeClick = (badge: string) => {
    setFilters(filters.filter((f) => f !== badge));
  };

  const onClickRefresh = () => {
    setFilters(INITIAL_STATE);
  };

  return (
    <div className="not-prose flex flex-col overflow-auto rounded-t-xl">
      <motion.div
        className="relative p-3 md:p-6"
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

        <div className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {position ? (
              <ul className="flex flex-wrap gap-2 sm:gap-3">
                {filters.map((filter) => (
                  <motion.li
                    key={filter}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      opacity: { duration: 0.2 },
                      layout: { type: "spring", bounce: 0.2 },
                    }}
                  >
                    <Badge
                      variant="default"
                      className="bg-zinc-50/10 text-zinc-50 backdrop-blur-sm hover:bg-zinc-50/20"
                    >
                      <motion.div
                        layout="position"
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          padding: "0.125rem",
                        }}
                      >
                        <motion.button
                          type="button"
                          onClick={() => handleBadgeClick(filter)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-0.5"
                        >
                          <XIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                        </motion.button>
                        <span className="text-xs sm:text-sm">{filter}</span>
                      </motion.div>
                    </Badge>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <ul className="flex flex-wrap gap-2 sm:gap-3">
                {filters.map((filter) => (
                  <motion.li
                    key={filter}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      opacity: { duration: 0.2 },
                      layout: { type: "spring", bounce: 0.2 },
                    }}
                  >
                    <Badge
                      variant="default"
                      className="bg-zinc-50/10 text-zinc-50 backdrop-blur-sm hover:bg-zinc-50/20"
                    >
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          padding: "0.125rem",
                        }}
                      >
                        <motion.button
                          type="button"
                          onClick={() => handleBadgeClick(filter)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-0.5"
                        >
                          <XIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                        </motion.button>
                        <span className="text-xs sm:text-sm">{filter}</span>
                      </div>
                    </Badge>
                  </motion.li>
                ))}
              </ul>
            )}
          </AnimatePresence>
          <div className="mt-6 flex flex-col justify-around gap-2 md:mt-3 md:flex-row md:gap-0">
            <div className="flex items-center space-x-2">
              <Switch
                id="badges-layout-position"
                onCheckedChange={(value) => setPosition(value)}
                checked={position}
                className="data-[state=unchecked]:bg-zinc-400 data-[state=checked]:bg-zinc-50"
              />
              <Label htmlFor="badges-layout-position" className="text-zinc-50">
                Enable layout='position'
              </Label>
            </div>

            <motion.button
              type="button"
              className="flex w-fit cursor-pointer items-center justify-center rounded-full border-none bg-zinc-50 px-3 py-1.5 text-sm text-zinc-800"
              onClick={onClickRefresh}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <RefreshCcw className="h-4 w-4" />
              <span className="ml-2">Reset</span>
            </motion.button>
          </div>
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
              <Code>
                {position ? exampleCodePositionLayout : exampleCodePositionLayoutOff}
              </Code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BadgesWidget;
