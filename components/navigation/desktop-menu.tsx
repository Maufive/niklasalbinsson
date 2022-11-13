import Link from 'next/link';
import { motion } from 'framer-motion';
import { useProgress } from 'utils/hooks';
import React from 'react';
import { LINKS } from './links';
import ThemeSwitcher from '../theme-switcher/theme-switcher';

type StyledLinksProps = {
  children?: React.ReactNode | React.ReactNode[];
  isActive?: boolean;
  href: string;
};

const StyledLink: React.FC<StyledLinksProps> = ({
  children,
  isActive,
  href,
}) => (
  <Link href={href} passHref>
    <a
      className={`rounded-md py-2 px-3 text-base font-normal transition-colors hover:bg-zinc-200 focus:ring focus:ring-zinc-900 dark:hover:bg-zinc-700 dark:focus:ring-zinc-200 ${
        isActive
          ? 'bg-zinc-200 text-zinc-900 hover:text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100'
          : 'text-zinc-600 focus:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-300'
      }`}
    >
      {children}
    </a>
  </Link>
);

const DesktopMenu: React.FC<{ pathname: string; showProgressBar: boolean }> = ({
  pathname,
  showProgressBar,
}) => {
  const scrollProgress = useProgress();

  return (
    <header className="fixed top-0 bottom-0 z-20 flex h-16 w-full items-center justify-center border-b border-zinc-200 bg-zinc-200/50 shadow-md backdrop-blur-md transition-colors dark:border-zinc-800 dark:bg-zinc-800/50">
      {showProgressBar && (
        <motion.div
          className="absolute bottom-0 h-1 w-full origin-left bg-primary"
          style={{ scaleX: scrollProgress }}
        />
      )}
      <div className="relative mx-auto flex w-full max-w-2xl items-center justify-between px-2">
        <nav>
          <ol className="flex py-0">
            <li className="mr-4 cursor-pointer transition-colors">
              <StyledLink isActive={pathname === '/'} href="/">
                Home
              </StyledLink>
            </li>

            {LINKS.map((link) => (
              <li
                key={link.href}
                className="mr-4 cursor-pointer transition-colors"
              >
                <StyledLink
                  isActive={pathname.includes(link.href)}
                  href={link.href}
                >
                  {link.label}
                </StyledLink>
              </li>
            ))}
          </ol>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default DesktopMenu;
