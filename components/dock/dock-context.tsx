"use client";

import { MotionValue, useMotionValue } from "framer-motion";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { useEvent } from "react-use";

type DockContextType = {
  mouse?: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  isDockHovered: boolean;
  dockWidth: number | undefined;
  setDockWidth: Dispatch<SetStateAction<number | undefined>>;
  setIsDockHovered: Dispatch<SetStateAction<boolean>>;
};

const InitialState = {
  isDockHovered: false,
  dockWidth: undefined,
  setDockWidth: () => {},
  setIsDockHovered: () => {},
};

export const DockContext = createContext<DockContextType>(InitialState);

export const useDockContext = () => {
  return useContext(DockContext);
};

const useMousePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEvent("mousemove", (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  });

  return useMemo(() => ({ x, y }), [x, y]);
};

export default function DockProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDockHovered, setIsDockHovered] = useState(false);
  const [dockWidth, setDockWidth] = useState<number | undefined>();
  const mouse = useMousePosition();

  const state = useMemo(
    () => ({ mouse, isDockHovered, dockWidth, setDockWidth, setIsDockHovered }),
    [mouse, isDockHovered, dockWidth],
  );

  return <DockContext.Provider value={state}>{children}</DockContext.Provider>;
}
