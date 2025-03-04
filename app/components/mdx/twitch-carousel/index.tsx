"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import React, { Children } from "react";
import useResizeObserver from "../../../hooks/use-resize-observer";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const data = [
  {
    title: "Item Number 9",
    color: "#14b8a6",
  },
  {
    title: "Item Number 10",
    color: "#06b6d4",
  },
  {
    title: "Item Number 1",
    color: "#0ea5e9",
  },
  {
    title: "Item Number 2",
    color: "#3b82f6",
  },
  {
    title: "Item Number 3",
    color: "#6366f1",
  },
  {
    title: "Item Number 4",
    color: "#8b5cf6",
  },
  {
    title: "Item Number 5",
    color: "#a855f7",
  },
  {
    title: "Item Number 6",
    color: "#d946ef",
  },
  {
    title: "Item Number 7",
    color: "#ec4899",
  },
  {
    title: "Item Number 8",
    color: "#f43f5e",
  },
];

const PADDING = 16;
const NUMBER_OF_ITEMS_TO_SHOW = 5;

function getCarouselItemXPositions(itemWidth?: number, containerWidth?: number) {
  if (!itemWidth || !containerWidth) {
    return {
      rightest: 0,
      right: 0,
      center: 0,
      left: 0,
      leftest: 0,
    };
  }

  const right = containerWidth / 2 - itemWidth - PADDING;
  const rightest = right * 2;
  const center = 0;
  const left = -(containerWidth / 2) + itemWidth + PADDING;
  const leftest = left * 2;

  return {
    rightest,
    right,
    center,
    left,
    leftest,
  };
}

type ArrowVariant = "left" | "right";

const ITEM_VARIANTS: Variants = {
  rightest: ({ rightest }: { rightest: number }) => ({
    x: rightest,
    scale: 0.7,
    opacity: 1,
    zIndex: 1,
  }),
  right: ({ right }: { right: number }) => ({
    x: right,
    scale: 0.85,
    opacity: 1,
    zIndex: 2,
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 3,
  },
  left: ({ left }: { left: number }) => ({
    x: left,
    scale: 0.85,
    opacity: 1,
    zIndex: 2,
  }),
  leftest: ({ leftest }: { leftest: number }) => ({
    x: leftest,
    scale: 0.7,
    opacity: 1,
    zIndex: 1,
  }),
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  exit: {
    opacity: 0,
    scale: 0.5,
  },
};

type VariantsMap = { [key: number]: string };

const IndexToVariantsMap: VariantsMap = {
  0: "leftest",
  1: "left",
  2: "center",
  3: "right",
  4: "rightest",
};

const ArrowButton = ({
  handleClick,
  variant,
}: {
  handleClick: () => void;
  variant: ArrowVariant;
}) => (
  <motion.button
    type="button"
    className="z-10 h-6 w-6 rounded-lg bg-zinc-800 p-1 shadow-lg"
    onClick={handleClick}
    whileHover={{ scale: 1.3 }}
  >
    {variant === "left" && <ArrowLeftIcon className="h-4 w-4 text-gray-50" />}
    {variant === "right" && <ArrowRightIcon className="h-4 w-4 text-gray-50" />}
  </motion.button>
);

const CarouselItem: React.FC<{
  position: number;
  children: React.ReactNode;
  containerWidth: number;
}> = ({ position, children, containerWidth }) => {
  const { ref, width } = useResizeObserver();
  const itemXPosition = getCarouselItemXPositions(width, containerWidth);

  return (
    <motion.div
      ref={ref}
      style={{
        left: `calc(50% - ${(width || 432) / 2}px)`,
      }}
      variants={ITEM_VARIANTS}
      animate={IndexToVariantsMap[position]}
      initial="initial"
      exit="exit"
      custom={itemXPosition}
      transition={{ duration: 0.5, zIndex: { delay: 0.25 } }}
      className="absolute top-0 rounded-xl shadow-2xl"
    >
      {children}
    </motion.div>
  );
};

const Carousel: React.FC<{
  children: React.ReactElement[];
}> = ({ children }) => {
  const childrenArray = Children.toArray(children);
  const [items, setItems] = React.useState(childrenArray);
  const { ref, width } = useResizeObserver();

  const handleClickNext = () => {
    // Take the first item and put it at the bottom
    const [first, ...rest] = items;
    setItems([...rest, first]);
  };

  const handleClickPrevious = () => {
    // We want to move the items in the array in reverse. So take the last item and put it at the top again.
    // 1. Get the last child
    const lastChild = items[items.length - 1];
    // Take a copy if current state. Remove the last child from it
    const childrenWithoutLastChild = [...items].filter((item) => item !== lastChild);
    // Apply the last child again at the start of the list
    setItems([lastChild, ...childrenWithoutLastChild]);
  };

  const itemsToShow = [...items].splice(0, NUMBER_OF_ITEMS_TO_SHOW);

  return (
    <div className="relative mx-auto flex h-52 items-center" ref={ref}>
      <ArrowButton variant="left" handleClick={handleClickPrevious} />
      <div className="relative mx-auto h-full w-full">
        <AnimatePresence initial={false}>
          {itemsToShow.map((child, index) => (
            <CarouselItem
              position={index}
              key={React.isValidElement(child) ? child.key : ""}
              containerWidth={width || 0}
            >
              {child}
            </CarouselItem>
          ))}
        </AnimatePresence>
      </div>
      <ArrowButton variant="right" handleClick={handleClickNext} />
    </div>
  );
};

const TwitchCarousel = () => (
  <div className="my-20 flex justify-center">
    <div className="w-full">
      <Carousel>
        {data.map((item) => (
          <div
            className="flex h-44 w-32 items-center justify-center rounded-xl p-2 md:w-60 lg:w-96"
            style={{
              backgroundColor: item.color,
            }}
            key={item.title}
          >
            <h2 className="font-serif text-sm font-bold text-stone-100 md:text-lg lg:text-xl">
              {item.title}
            </h2>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default TwitchCarousel;
