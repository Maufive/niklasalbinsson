import React, { useState, useEffect, Fragment } from 'react';
import { useTheme } from 'next-themes';
import { Menu } from '@headlessui/react';
import { motion } from 'framer-motion';
import {
  MenuIcon,
  AtSymbolIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline';
import { TwitterIcon, GithubIcon } from '../icons';

const CHILD_VARIANTS = {
  open: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  closed: {
    y: 25,
    opacity: 0,
    scale: 0.8,
  },
};

const EXTERNAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Maufive',
    ariaTitle: 'Link to my Github',
    icon: (
      <GithubIcon
        className="h-5 w-5 fill-transparent stroke-2"
        aria-hidden="true"
      />
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/albinssonniklas',
    ariaTitle: 'Link to my Twitter',
    icon: (
      <TwitterIcon
        className="h-5 w-5 fill-transparent stroke-2"
        aria-hidden="true"
      />
    ),
  },
  {
    label: 'Email',
    href: 'mailto:albinssonniklas@gmail.com',
    ariaTitle: 'Send me an email',
    icon: <AtSymbolIcon className="h-5 w-5" aria-hidden="true" />,
  },
];

const ThemeSwitcherButton: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>('dark');
  const isDarkTheme = currentTheme === 'dark';

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    if (isDarkTheme) {
      setTheme('light');
      return;
    }

    setTheme('dark');
  };

  return (
    <Menu.Item as={motion.li} variants={CHILD_VARIANTS}>
      {({ active }) => (
        <motion.button
          type="button"
          className={`flex items-center rounded-xl border  p-3 transition-colors md:rounded-lg md:p-2 ${
            active
              ? 'border-zinc-100 bg-primary text-zinc-100'
              : 'border-zinc-400 bg-zinc-100 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300'
          }`}
          onClick={toggleTheme}
          title={`Toggle ${isDarkTheme ? 'light' : 'dark'} mode`}
        >
          {isDarkTheme ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </motion.button>
      )}
    </Menu.Item>
  );
};

const MenuItem: React.FC<{
  icon: JSX.Element;
  href: string;
  ariaTitle: string;
}> = ({ icon, href, ariaTitle }) => (
  <Menu.Item as={motion.li} variants={CHILD_VARIANTS}>
    {({ active }) => (
      <a
        className={`flex items-center rounded-xl border  p-3 transition-colors md:rounded-lg md:p-2  ${
          active
            ? 'border-primary-light text-primary-light'
            : 'border-zinc-400 bg-zinc-100 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300'
        }`}
        href={href}
        target="_blank"
        rel="noreferrer"
        title={ariaTitle}
        aria-label={ariaTitle}
      >
        {icon}
      </a>
    )}
  </Menu.Item>
);

const CONTAINER_VARIANTS = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
      staggerDirection: -1,
    },
  },
  closed: {
    opacity: 0,
    y: 10,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Submenu: React.FC = () => (
  <Menu as={Fragment}>
    {({ open }) => (
      <>
        <Menu.Button
          aria-label="Submenu button"
          className={`flex items-center rounded-xl border  border-zinc-400 bg-zinc-100 p-3 text-zinc-700 transition-colors focus:outline-none
               focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-opacity-75 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 md:rounded-lg md:p-2 ${
                 open
                   ? 'outline-none ring-2 ring-primary-light ring-opacity-75'
                   : ''
               }`}
        >
          <MenuIcon className={`h-5 w-5 transition-colors ${open ? '' : ''}`} />
        </Menu.Button>
        <Menu.Items
          as={motion.ul}
          variants={CONTAINER_VARIANTS}
          initial="closed"
          animate="open"
          className="fixed right-0 bottom-20 flex origin-bottom-right flex-col items-center space-y-4 rounded-xl border border-zinc-400 bg-zinc-100/75 p-1 shadow-xl dark:border-zinc-600 dark:bg-zinc-900/90 md:bottom-16 md:rounded-lg"
        >
          {EXTERNAL_LINKS.map((link) => (
            <MenuItem
              href={link.href}
              icon={link.icon}
              key={link.href}
              ariaTitle={link.ariaTitle}
            />
          ))}
          <motion.div
            variants={CHILD_VARIANTS}
            key="sub-menu-divider"
            className="inline-block h-px w-8 bg-zinc-400 dark:bg-zinc-600"
          />
          <ThemeSwitcherButton />
        </Menu.Items>
      </>
    )}
  </Menu>
);

export default Submenu;
