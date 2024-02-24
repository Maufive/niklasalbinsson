"use client";

import { useEffect, useRef } from "react";
import DockProvider, { useDockContext } from "./dock-context";

function Dock({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const { setDockWidth, setIsDockHovered } = useDockContext();

  useEffect(() => {
    setDockWidth(ref?.current?.clientWidth);
  }, [setDockWidth]);

  return (
    <footer
      className="fixed bottom-[-8px] z-10 flex w-auto justify-center left-1/2 h-16 px-3 rounded-lg border border-border bg-card shadow-lg"
      style={{ transform: "translate(-50%, -50%) translateY(0px)" }}
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
}: {
  children: React.ReactNode;
}) {
  return (
    <DockProvider>
      <Dock>{children}</Dock>
    </DockProvider>
  );
}
