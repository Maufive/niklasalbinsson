'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useProgress } from 'utils/hooks';
import React from 'react';

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
  <Link
    href={href}
    passHref
    className={`rounded-md px-3 py-2 text-base font-normal transition-colors hover:bg-zinc-700 focus:ring focus:ring-primary-dark ${
      isActive
        ? 'bg-zinc-700 text-zinc-100 hover:text-zinc-300'
        : 'text-zinc-400'
    }`}
  >
    {children}
  </Link>
);

const DesktopMenu: React.FC<{ pathname: string; showProgressBar: boolean }> = ({
  pathname,
  showProgressBar,
}) => {
  const scrollProgress = useProgress();

  return (
    <header className="fixed bottom-0 top-0 z-20 flex h-16 w-full items-center justify-center border-b border-zinc-800 bg-zinc-800/50 shadow-md backdrop-blur-md">
      {showProgressBar && (
        <motion.div
          className="absolute bottom-0 h-1 w-full origin-left bg-primary"
          style={{ scaleX: scrollProgress }}
        />
      )}
      <div className="relative mx-auto flex w-full max-w-2xl items-center justify-between px-4 md:px-0">
        <nav>
          <ol className="flex py-0">
            <li className="mr-4 cursor-pointer transition-colors">
              <StyledLink isActive={pathname === '/'} href="/">
                Home
              </StyledLink>
            </li>
            <li className="mr-4 cursor-pointer transition-colors">
              <StyledLink isActive={pathname.includes('/blog')} href="/blog">
                Blog
              </StyledLink>
            </li>
            <li className="mr-4 cursor-pointer transition-colors">
              <StyledLink isActive={pathname.includes('/about')} href="/about">
                About
              </StyledLink>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default DesktopMenu;
