"use client";

import { useEffect, useRef } from "react";
import { cn } from "utils/classnames";
import DockProvider, { useDockContext, DockConfig } from "./dock-context";

function Dock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { setDockWidth, setIsDockHovered } = useDockContext();

  useEffect(() => {
    setDockWidth(ref?.current?.clientWidth);
  }, [setDockWidth]);

  return (
    <footer
      className={cn(
        "fixed bottom-[-14px] z-10 flex w-auto justify-center left-1/2 h-16 px-3 rounded-lg border border-border bg-card shadow-lg translate-y-[-50%] translate-x-[-50%]",
        className,
      )}
    >
      <div className="absolute w-[95%] z-[-1] -top-[1px] h-[1px] opacity-50 dock-border-gradient" />
      <nav
        ref={ref}
        className="flex gap-3 items-end justify-center py-3"
        onMouseOver={() => setIsDockHovered(true)}
        onMouseOut={() => setIsDockHovered(false)}
      >
        {children}
      </nav>
    </footer>
  );
}

export default function DockContainer({
  children,
  config,
  className,
}: {
  children: React.ReactNode;
  config?: DockConfig;
  className?: string;
}) {
  return (
    <DockProvider config={config}>
      <Dock className={className}>{children}</Dock>
    </DockProvider>
  );
}
