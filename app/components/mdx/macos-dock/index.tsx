"use client";

import { Slider } from "../../ui/slider";
import Dock from "./dock";
import DockItem from "./dock-item";
import { useState } from "react";
import { AboutIcon, BlogIcon, GithubIcon, HomeIcon, SparkleIcon } from "./icons";

export default function DockWidget() {
  const [size, setSize] = useState(40);
  const [magnification, setMagnification] = useState(30);
  const [scale, setScale] = useState(18);

  return (
    <div className="not-prose flex flex-col gap-8 p-8 justify-center items-center relative  min-h-80 rounded-lg z-[2] my-10">
      <div className="absolute inset-0 bg-grid-slate-700 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255, 1))] [mask-image:linear-gradient(0deg,rgba(255,255,255,0.3),rgba(255,255,255,0.5))]" />
      <div className="flex flex-col gap-4 max-w-[375px] w-full text-sm">
        <div className="flex flex-col gap-2">
          <label htmlFor="size" className="text-foreground font-bold">
            Size: <span className="text-muted-foreground font-normal">{size}px</span>
          </label>
          <Slider
            defaultValue={[size]}
            min={20}
            max={60}
            step={1}
            id="size"
            onValueChange={(value) => setSize(value.at(0) ?? 40)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="magnification" className="text-foreground font-bold">
            Magnification:{" "}
            <span className="text-muted-foreground font-normal">{magnification}</span>
          </label>
          <Slider
            defaultValue={[magnification]}
            min={0}
            max={60}
            step={1}
            id="magnification"
            onValueChange={(value) => setMagnification(value.at(0) ?? 30)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="scale" className="text-foreground font-bold">
            Sibling Scaling:{" "}
            <span className="text-muted-foreground font-normal">{scale}</span>
          </label>
          <Slider
            defaultValue={[scale]}
            min={4}
            max={30}
            step={1}
            id="scale"
            onValueChange={(value) => setScale(value.at(0) ?? 18)}
          />
        </div>
      </div>
      <Dock
        className="relative w-fit translate-x-0 translate-y-0 left-0 bottom-0"
        config={{
          size,
          magnification,
          scale,
        }}
      >
        <DockItem tooltipLabel="Home">
          <HomeIcon className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        <DockItem tooltipLabel="About">
          <AboutIcon className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        <DockItem tooltipLabel="Blog">
          <BlogIcon className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        <DockItem tooltipLabel="Projects">
          <SparkleIcon className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
        <DockItem tooltipLabel="Github">
          <GithubIcon className="flex items-center justify-center w-full h-full p-2" />
        </DockItem>
      </Dock>
    </div>
  );
}
