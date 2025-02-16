import { START_HOUR, minutesToPixels } from "./utils";

interface TimeGridProps {
  hours: number[];
  intervals: number[];
}

export function TimeGrid({ hours, intervals }: TimeGridProps) {
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 w-14 sm:w-16 bg-[#1C1C1E] z-10 rounded-bl-3xl">
        {hours.map((hour) => (
          <div
            key={hour}
            className="absolute w-full flex items-center justify-end pr-2"
            style={{
              top: minutesToPixels((hour - START_HOUR) * 60),
              height: 20,
            }}
          >
            <span className="text-xs font-medium text-zinc-500 select-none">
              {hour} PM
            </span>
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-14 sm:left-16 right-0 bottom-0">
        {hours.map((hour) => (
          <div
            key={hour}
            className="absolute w-full border-t border-zinc-800/50"
            style={{ top: minutesToPixels((hour - START_HOUR) * 60) }}
          />
        ))}
        {intervals.map((interval) => (
          <div
            key={interval}
            className="absolute w-full border-t border-zinc-800/30"
            style={{ top: `${minutesToPixels(interval)}px` }}
          />
        ))}
      </div>
    </>
  );
}
