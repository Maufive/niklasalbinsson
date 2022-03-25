import { useEffect, useState } from 'react';
import { GithubIcon, TwitterIcon, AtIcon } from 'components/icons';
import NowPlaying from '../now-playing/now-playing';
import useIsIosSafari from '../../utils/hooks/use-is-ios-safari';

const CURRENT_YEAR = new Date().getFullYear();

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
    <footer className="my-0 mx-auto mt-20 w-full max-w-2xl p-2 2xl:mt-32">
      <NowPlaying />
      <nav className="mt-20 flex w-full justify-center py-2 2xl:mt-32">
        <ul className="flex flex-wrap items-center space-x-6">
          <li className="p-2">
            <a
              title="Email Me"
              href="mailto:albinssonniklas@gmail.com"
              className="ml-0 flex cursor-pointer items-center rounded-lg border border-zinc-600 bg-zinc-200 px-2 py-2 text-sm font-semibold text-zinc-600 shadow-md transition-all hover:scale-105 hover:border-secondary hover:bg-secondary hover:text-zinc-50 focus:border-secondary focus:bg-secondary focus:text-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 md:ml-5 md:px-4 md:text-base"
            >
              <AtIcon className="mr-2 h-4 w-4 fill-transparent stroke-current stroke-2" />
              Email Me
            </a>
          </li>
          {EXTERNAL_LINKS.map((link) => (
            <li key={link.href} className="p-2">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                title={`Link to my ${link.label} profile`}
                className="flex rounded-md p-1 text-zinc-600 transition-colors hover:text-zinc-900 focus:ring focus:ring-primary dark:text-zinc-300 hover:dark:text-zinc-50"
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
