"use client";

import { useEffect, useState } from "react";
import NowPlaying from "./now-playing";
import useIsIosSafari from "../utils/hooks/use-is-ios-safari";

const CURRENT_YEAR = new Date().getFullYear();

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
