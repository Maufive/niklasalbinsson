import React, { Fragment } from 'react';
import { Menu } from '@headlessui/react';
import { motion } from 'framer-motion';
import { MenuIcon, AtSymbolIcon } from '@heroicons/react/24/outline';
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

const MenuItem: React.FC<{
  icon: JSX.Element;
  href: string;
  ariaTitle: string;
}> = ({ icon, href, ariaTitle }) => (
  <Menu.Item as={motion.li} variants={CHILD_VARIANTS}>
    {({ active }) => (
      <a
        className={`flex items-center rounded-lg border  p-3 transition-colors md:rounded-lg md:p-2  ${
          active
            ? 'border-primary-light text-primary-light'
            : 'border-zinc-700 bg-zinc-900 text-zinc-300'
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
          className={`flex items-center rounded-lg border  border-zinc-700 bg-zinc-900 p-3 text-zinc-300 transition-colors focus:outline-none
               focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-opacity-75 md:rounded-lg md:p-2 ${
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
          className="shadow-xlmd:bottom-16 fixed bottom-20 right-0 flex origin-bottom-right flex-col items-center space-y-4 rounded-2xl border border-zinc-600 bg-zinc-900/90 p-2 md:rounded-lg"
        >
          {EXTERNAL_LINKS.map((link) => (
            <MenuItem
              href={link.href}
              icon={link.icon}
              key={link.href}
              ariaTitle={link.ariaTitle}
            />
          ))}
        </Menu.Items>
      </>
    )}
  </Menu>
);

export default Submenu;
