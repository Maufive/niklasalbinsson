"use client";

import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useEvent } from "react-use";
import { useDockContext } from "./dock-context";

const BUTTON_SIZE = 40;
const MAGNIFICATION_MULTIPLIER = 30;
const SIBLING_SCALE_FACTOR = 18;

const DockItem = ({ children }: { children?: ReactNode }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { dockWidth, mouse, isDockHovered } = useDockContext();
  const totalWidth = dockWidth ?? 0;
  const [centerXPosition, setCenterXPosition] = useState(0);
  const initialMouseX = useMotionValue(0);

  /**
   * Calculating the dimensions of the dock item based on the mouse position.
   * The dimension of the dock item is calculated using the cosine function to give a magnification effect.
   */
  function calculateDockItemDimension(mouseX: number) {
    const normalizedMouseX = (mouseX - centerXPosition) / totalWidth;
    const cosineValue = Math.cos((normalizedMouseX * Math.PI) / 2);

    return (
      BUTTON_SIZE +
      MAGNIFICATION_MULTIPLIER * cosineValue ** SIBLING_SCALE_FACTOR
    );
  }

  /**
   * Initialising the dimension of the dock item.
   * The dimension of the dock item is calculated based on the mouse position.
   * The dimension is calculated using the cosine function to give a magnification effect.
   */
  const dimension = useTransform(
    mouse?.x ?? initialMouseX,
    calculateDockItemDimension,
  );

  const spring = useSpring(BUTTON_SIZE, {
    damping: 10,
    stiffness: 150,
    mass: 0.01,
  });

  /**
   * Updating the dimension of the button on mouse position change
   */
  useEffect(() => {
    return dimension.onChange((val) => {
      if (isDockHovered) {
        spring.set(val);
      } else {
        spring.set(BUTTON_SIZE);
      }
    });
  }, [spring, dimension, isDockHovered]);

  /**
   * Initialising the center x position of the button
   */
  useEffect(() => {
    const rect = ref.current ? ref.current.getBoundingClientRect() : null;
    if (rect) {
      setCenterXPosition(rect.x + rect.width / 2);
    }
  }, []);

  /**
   * Updating the center x position of the button on window resize
   */
  useEvent("resize", () => {
    const rect = ref.current ? ref.current.getBoundingClientRect() : null;
    if (rect) {
      setCenterXPosition(rect.x + rect.width / 2);
    }
  });

  return (
    <motion.button
      ref={ref}
      className="relative rounded-md flex items-center justify-center dock-item-gradient"
      custom={spring}
      transition={{
        default: {
          duration: 0.2,
        },
        translateY: {
          duration: 0.4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        },
      }}
      style={{
        height: spring,
        width: spring,
      }}
      whileHover={{
        // backgroundColor: "hsl(209, 81.2%, 84.5%)",
        // borderColor: "hsl(206, 81.9%, 65.3%)",
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
      whileFocus={{
        // backgroundColor: "hsl(209, 81.2%, 84.5%)",
        // borderColor: "hsl(206, 81.9%, 65.3%)",
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
    >
      <div className="absolute opacity-80 top-[-1px] w-full h-full z-[-1] dock-item-top-gradient" />
      {children}
    </motion.button>
  );
};

export default DockItem;
