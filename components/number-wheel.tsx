"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const ITEM_HEIGHT = 30;

const TimeInput = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
  });

  console.log(time);

  return (
    <div className="flex gap-4">
      <TimeInputUnit
        value={time.hours}
        setValue={(hours: number) => setTime({ ...time, hours })}
        maxValue={23}
      />
      <TimeInputUnit
        value={time.minutes}
        setValue={(minutes: number) => setTime({ ...time, minutes })}
        maxValue={59}
      />
    </div>
  );
};

const TimeInputUnit = ({ value, setValue, maxValue }: any) => {
  const scrollRef = useRef(null);

  return (
    <div className="h-[150px] overflow-y-scroll snap-y scrollbar-hide border">
      {Array.from({ length: maxValue + 1 }).map((_, index) => (
        <motion.div
          initial={{ opacity: 0.2, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ root: scrollRef, amount: "some" }}
          key={index}
          className={`h-[${ITEM_HEIGHT}px] text-center text-lg snap-end ${
            index === value ? "text-red-500" : "text-white"
          }`}
        >
          <button onClick={() => setValue(index)}>{index}</button>
        </motion.div>
      ))}
    </div>
  );
};

export default TimeInput;
