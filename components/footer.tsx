"use client";

import { useEffect, useState } from "react";
import { GithubIcon, AtIcon } from "components/icons";
import NowPlaying from "./now-playing";
import useIsIosSafari from "../utils/hooks/use-is-ios-safari";

const CURRENT_YEAR = new Date().getFullYear();

const FancyButton = () => (
  <a
    className="group relative block"
    title="Email Me"
    href="mailto:albinssonniklas@gmail.com"
  >
    <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-primary to-secondary opacity-50 blur transition duration-1000 hover:scale-[1.02] group-hover:opacity-100 group-hover:duration-200 group-focus:scale-[1.02]  group-focus:opacity-100  group-focus:duration-200" />
    <div className="relative flex items-center rounded-md bg-zinc-900 px-7 py-4 leading-none">
      <span className="flex items-center text-foreground transition duration-200">
        <AtIcon className="mr-2 h-4 w-4 fill-transparent stroke-current stroke-2" />
        Email Me
      </span>
    </div>
  </a>
);

const EXTERNAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Maufive",
    icon: (
      <GithubIcon className="transition-color h-6 w-6 fill-transparent stroke-current stroke-2" />
    ),
  },
];

const FooterNavigation = () => {
  const [today, setToday] = useState<string>("");
  const isIOSSafari = useIsIosSafari();

  useEffect(() => {
    if (window) {
      const lang = window?.navigator?.language;
      const day = new Intl.DateTimeFormat(lang, {
        dateStyle: "full",
      })
        .format(new Date())
        .split(", ");

      if (isIOSSafari) {
        const dayInSafari = day[0].split(" ")[0].toLowerCase();
        return setToday(dayInSafari);
      }

      setToday(day[0].toLowerCase());
    }
  }, [isIOSSafari]);

  return (
    <footer className="mx-auto w-full max-w-2xl p-6 lg:pb-24 lg:px-0 lg:pt-0 flex flex-col gap-10">
      <NowPlaying />
      <p className="text-center text-base">
        © <span className="font-bold">Niklas Albinsson</span> {CURRENT_YEAR} |
        Have a nice {today}!
      </p>
    </footer>
  );
};

export default FooterNavigation;
