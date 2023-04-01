'use client';

import { useEffect, useState } from 'react';
import { GithubIcon, TwitterIcon, AtIcon } from 'components/icons';
import NowPlaying from '../now-playing/now-playing';
import useIsIosSafari from '../../utils/hooks/use-is-ios-safari';

const CURRENT_YEAR = new Date().getFullYear();

const FancyButton = () => (
  <a
    className="group relative block"
    title="Email Me"
    href="mailto:albinssonniklas@gmail.com"
  >
    <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-primary to-secondary opacity-50 blur transition duration-1000 hover:scale-[1.02] group-hover:opacity-100 group-hover:duration-200 group-focus:scale-[1.02]  group-focus:opacity-100  group-focus:duration-200" />
    <div className="relative flex items-center rounded-md bg-zinc-900 px-7 py-4 leading-none">
      <span className="flex items-center text-zinc-300 transition duration-200 group-hover:text-zinc-50">
        <AtIcon className="mr-2 h-4 w-4 fill-transparent stroke-current stroke-2" />
        Email Me
      </span>
    </div>
  </a>
);

const EXTERNAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Maufive',
    icon: (
      <GithubIcon className="transition-color h-6 w-6 fill-transparent stroke-current stroke-2" />
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/albinssonniklas',
    icon: (
      <TwitterIcon className="transition-color h-6 w-6 fill-transparent stroke-current stroke-2" />
    ),
  },
];

const FooterNavigation = () => {
  const [today, setToday] = useState<string>('');
  const isIOSSafari = useIsIosSafari();

  useEffect(() => {
    if (window) {
      const lang = window?.navigator?.language;
      const day = new Intl.DateTimeFormat(lang, {
        dateStyle: 'full',
      })
        .format(new Date())
        .split(', ');

      if (isIOSSafari) {
        const dayInSafari = day[0].split(' ')[0].toLowerCase();
        return setToday(dayInSafari);
      }

      setToday(day[0].toLowerCase());
    }
  }, [isIOSSafari]);

  return (
    <footer className="mx-auto my-0 mt-10 w-full max-w-2xl space-y-20 p-4 pb-20 2xl:mt-32">
      <NowPlaying />
      <nav className="my-20 hidden w-full justify-center py-2 sm:flex 2xl:mt-32">
        <ul className="flex flex-wrap items-center space-x-6">
          <li>
            <FancyButton />
          </li>
          {EXTERNAL_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                title={`Link to my ${link.label} profile`}
                className="flex rounded-md p-1 text-zinc-300 hover:text-zinc-500 focus:ring focus:ring-primary"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="my-4 text-center text-base">
        © <span className="font-bold">Niklas Albinsson</span> {CURRENT_YEAR} |
        Have a nice {today}!
      </p>
    </footer>
  );
};

export default FooterNavigation;
