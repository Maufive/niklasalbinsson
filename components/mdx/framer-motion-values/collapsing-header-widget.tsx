/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */

"use client";

import { useState, useRef, FC } from "react";
import {
  motion,
  useMotionTemplate,
  useTransform,
  AnimatePresence,
  useScroll,
} from "framer-motion";
import CodeBlock from "components/code-block";

const CODE_STRING = `
import {
  motion,
  useMotionTemplate,
  useTransform,
  useScroll,
} from 'framer-motion';

const SCROLL_THRESHOLD = [0, 150];

const MyComponent = () => {
    // The container argument is Optional - I need this in this example since I want the track 
    // the scroll inside the widget - not the scroll on the entire page.
    const { scrollY } = useScroll({
      container: widgetRef,
    });
    const height = useTransform(scrollY, SCROLL_THRESHOLD, [72, 50]);
    const backgroundOpacity = useTransform(scrollY, SCROLL_THRESHOLD, [1, 0.8]);
    const backgroundColorTemplate = useMotionTemplate'rgba(31 41 55 / backgroundOpacity)'; // Use backticks here

    const logoX = useTransform(scrollY, [0, 75], [0, -50]);
    const logoOpacity = useTransform(scrollY, [0, 75], [1, 0]);

    return (
        <motion.nav
            className="sticky top-0 z-10 flex w-full items-center backdrop-blur-md"
            style={{ height, backgroundColor: backgroundColorTemplate }}
          >
            <div className="w-full max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex w-full items-center">
                <div className="flex w-full items-center sm:items-stretch sm:justify-start">
                  <motion.div
                    className="flex flex-shrink-0 items-center"
                    style={{ x: logoX, opacity: logoOpacity }}
                  >
                    <img
                      className="block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
        </motion.nav>
    )
}
`;

const NavigationItem: FC<{ isActive?: boolean; className?: string }> = ({
  children,
  isActive,
  className,
}) => (
  <a
    href="#"
    className={`rounded-md text-sm font-medium text-white ${
      isActive ? "" : "text-gray-400 hover:text-white"
    } ${className ?? ""}`}
    aria-current="page"
  >
    {children}
  </a>
);

const SCROLL_THRESHOLD = [0, 150];

const CollapsingHeaderWidget = () => {
  const [showCode, setShowCode] = useState(false);
  const widgetRef = useRef(null);
  const { scrollY } = useScroll({
    container: widgetRef,
  });
  const height = useTransform(scrollY, SCROLL_THRESHOLD, [72, 50]);
  const backgroundOpacity = useTransform(scrollY, SCROLL_THRESHOLD, [1, 0.8]);
  const backgroundColorTemplate = useMotionTemplate`rgba(31 41 55 / ${backgroundOpacity})`;

  const x = useTransform(scrollY, [0, 75], [0, -50]);
  const logoOpacity = useTransform(scrollY, [0, 75], [1, 0]);

  return (
    <div className="relative">
      <motion.div
        className="not-prose h-96 w-full overflow-scroll rounded-xl bg-gradient-to-r from-primary to-primary-dark"
        ref={widgetRef}
        animate={{
          borderBottomRightRadius: showCode ? "0px" : "12px",
          borderBottomLeftRadius: showCode ? "0px" : "12px",
        }}
      >
        <motion.nav
          className="sticky flex w-full items-center px-2 backdrop-blur-md sm:px-6 lg:px-8"
          style={{ height, backgroundColor: backgroundColorTemplate }}
        >
          <div className="flex w-full items-center sm:items-stretch sm:justify-start">
            <motion.div
              className="flex flex-shrink-0 items-center"
              style={{ x, opacity: logoOpacity }}
            >
              <img
                className="block h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </motion.div>
            <div className="flex w-full justify-between">
              <div className="ml-6 flex items-center space-x-4">
                <NavigationItem isActive>Dashboard</NavigationItem>
                <NavigationItem className="hidden sm:flex">Team</NavigationItem>
                <NavigationItem className="hidden sm:flex">
                  Projects
                </NavigationItem>
              </div>
              <motion.button
                className="rounded-md bg-zinc-50 px-2 py-1 text-xs text-zinc-800 shadow-md"
                type="button"
                onClick={() => setShowCode(!showCode)}
                whileHover={{ scale: 1.05 }}
              >
                {showCode ? "Hide code" : "Show code"}
              </motion.button>
            </div>
          </div>
        </motion.nav>
        <div className="mx-auto my-8 flex w-4/5 flex-col space-y-4 rounded-xl bg-gray-100 p-6 lg:w-2/3">
          <p className="text-sm text-gray-800">
            Est reprehenderit irure consequat aliquip qui dolore cillum eu ut
            veniam. Id officia consequat qui duis laboris minim ipsum excepteur
            sint dolor anim elit. Ut mollit duis Lorem sunt dolor qui non
            deserunt consectetur minim duis officia. Magna nisi proident id
            culpa aliquip nostrud non in do in incididunt. Exercitation
            cupidatat magna voluptate consequat incididunt dolore amet qui non
            consectetur. Anim anim aliqua fugiat ut amet occaecat proident enim
            quis nulla velit sint.
          </p>
          <p className="text-sm text-gray-800">
            Est reprehenderit irure consequat aliquip qui dolore cillum eu ut
            veniam. Id officia consequat qui duis laboris minim ipsum excepteur
            sint dolor anim elit. Ut mollit duis Lorem sunt dolor qui non
            deserunt consectetur minim duis officia. Magna nisi proident id
            culpa aliquip nostrud non in do in incididunt. Exercitation
            cupidatat magna voluptate consequat incididunt dolore amet qui non
            consectetur. Anim anim aliqua fugiat ut amet occaecat proident enim
            quis nulla velit sint.
          </p>
          <p className="text-sm text-gray-800">
            Est reprehenderit irure consequat aliquip qui dolore cillum eu ut
            veniam. Id officia consequat qui duis laboris minim ipsum excepteur
            sint dolor anim elit. Ut mollit duis Lorem sunt dolor qui non
            deserunt consectetur minim duis officia. Magna nisi proident id
            culpa aliquip nostrud non in do in incididunt.
          </p>
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
            <CodeBlock codeString={CODE_STRING} language="jsx" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsingHeaderWidget;
