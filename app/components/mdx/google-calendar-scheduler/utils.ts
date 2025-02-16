export const START_HOUR = 1;
export const END_HOUR = 6;
export const TOTAL_MINUTES = (END_HOUR - START_HOUR) * 60;
export const HOUR_HEIGHT = 80;
export const INTERVAL = 15;

export function snapToInterval(minutes: number, interval: number = 15): number {
  return Math.round(minutes / interval) * interval;
}

export function minutesToPixels(minutes: number): number {
  return (minutes / TOTAL_MINUTES) * (HOUR_HEIGHT * (END_HOUR - START_HOUR));
}

export function pixelsToMinutes(pixels: number): number {
  const rawMinutes = Math.round(
    (pixels / (HOUR_HEIGHT * (END_HOUR - START_HOUR))) * TOTAL_MINUTES,
  );
  return Math.floor(rawMinutes / INTERVAL) * INTERVAL;
}

export function formatTime(minutes: number): string {
  const totalMinutes = minutes + START_HOUR * 60;
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  return `${hours}:${mins.toString().padStart(2, "0")} PM`;
}

export function getIntervals(): number[] {
  const intervals: number[] = [];
  for (let i = 0; i <= TOTAL_MINUTES; i += INTERVAL) {
    intervals.push(i);
  }
  return intervals;
}
