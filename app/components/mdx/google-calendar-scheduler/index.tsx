"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { START_HOUR, END_HOUR, getIntervals } from "./utils";
import { TimeGrid } from "./time-grid";
import { TaskBlock } from "./task-block";
import { useTask } from "./use-tasks";

export default function CalendarWidget() {
  const calendarRef = useRef<HTMLDivElement>(null);
  const {
    task,
    cursorPosition,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    clearTask,
  } = useTask();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        clearTask();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [clearTask]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!calendarRef.current) return;
    handleDragStart(calendarRef.current.getBoundingClientRect(), e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!calendarRef.current) return;
    handleDragMove(calendarRef.current.getBoundingClientRect(), e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!calendarRef.current) return;
    e.preventDefault();
    handleDragStart(calendarRef.current.getBoundingClientRect(), e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!calendarRef.current) return;
    e.preventDefault();
    handleDragMove(calendarRef.current.getBoundingClientRect(), e.touches[0].clientY);
  };

  const hours = Array.from({ length: END_HOUR - START_HOUR }, (_, i) => i + START_HOUR);
  const intervals = getIntervals();

  return (
    <div className="bg-[#1C1C1E] rounded-3xl shadow-lg p-24">
      <div
        className="relative w-full h-[400px] border-0 overflow-hidden cursor-none touch-none"
        ref={calendarRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={() => {
          handleDragEnd();
          handleDragMove(calendarRef.current!.getBoundingClientRect(), -1);
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onTouchCancel={handleDragEnd}
      >
        <TimeGrid hours={hours} intervals={intervals} />

        <div className="absolute top-0 left-14 sm:left-16 right-0 bottom-0">
          <AnimatePresence>
            {task && <TaskBlock start={task.start} end={task.end} />}
          </AnimatePresence>

          <motion.div
            className="absolute left-0 right-0 h-[2px] pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: cursorPosition === null ? 0 : 1,
              y: cursorPosition ?? 0,
            }}
            transition={{
              opacity: { duration: 0.2 },
              y: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                restDelta: 0.5,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
