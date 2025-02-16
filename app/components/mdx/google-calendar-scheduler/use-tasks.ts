import { useState, useRef, useCallback } from "react";
import { pixelsToMinutes, minutesToPixels, snapToInterval } from "./utils";

interface Task {
  start: number;
  end: number;
}

interface TaskDragState {
  y: number;
  minutes: number;
}

export function useTask() {
  const [task, setTask] = useState<Task | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const lastUpdateRef = useRef<number>(0);
  const dragStartRef = useRef<TaskDragState | null>(null);

  const handleDragStart = useCallback((rect: DOMRect, clientY: number) => {
    const startY = Math.max(0, Math.min(clientY - rect.top, rect.height));
    const startMinutes = snapToInterval(pixelsToMinutes(startY));

    dragStartRef.current = { y: startY, minutes: startMinutes };
    setTask({ start: startMinutes, end: startMinutes });
    setIsDragging(true);
  }, []);

  const handleDragMove = useCallback(
    (rect: DOMRect, clientY: number) => {
      // Update cursor position
      const currentY = Math.max(0, Math.min(clientY - rect.top, rect.height));
      const currentMinutes = snapToInterval(pixelsToMinutes(currentY));
      setCursorPosition(minutesToPixels(currentMinutes));

      // Update task if dragging
      if (isDragging && dragStartRef.current) {
        const currentMinutes = snapToInterval(pixelsToMinutes(currentY));
        const startMinutes = dragStartRef.current.minutes;

        const top = Math.min(startMinutes, currentMinutes);
        const bottom = Math.max(startMinutes, currentMinutes);

        // Update more frequently for smoother animation
        if (Date.now() - lastUpdateRef.current > 16) {
          // ~60fps
          setTask({ start: top, end: bottom });
          lastUpdateRef.current = Date.now();
        }
      }
    },
    [isDragging],
  );

  const handleDragEnd = useCallback(() => {
    if (task) {
      // Ensure final position is snapped
      setTask({
        start: snapToInterval(task.start),
        end: snapToInterval(task.end),
      });
    }
    setIsDragging(false);
    dragStartRef.current = null;
  }, [task]);

  const clearTask = useCallback(() => {
    setTask(null);
  }, []);

  return {
    task,
    isDragging,
    cursorPosition,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    clearTask,
  };
}
