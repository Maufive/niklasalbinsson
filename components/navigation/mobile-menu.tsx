import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLockedBody, useProgress } from 'utils/hooks';
import ThemeSwitcher from '../theme-switcher/theme-switcher';
import { LINKS } from './links';
import { HamburgerIcon, CloseIcon } from '../icons';

const NAV_CONTAINER_VARIANTS = {
  initial: { x: -100, opacity: 0 },
  exit: { x: -100, opacity: 0, boxShadow: 'none' },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.1,
    },
  },
};

const NAV_ITEM_VARIANTS = {
  initial: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const MobileNavigation: React.FC<{
  pathname: string;
  showProgressBar: boolean;
}> = ({ pathname, showProgressBar }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [locked, setLocked] = useLockedBody();
  const scrollProgress = useProgress();

  useEffect(() => () => setIsOpen(false), [pathname]);

  useEffect(() => {
    if (isOpen) {
      setLocked(true);
    }
    return () => setLocked(false);
  }, [isOpen, setLocked]);

  return (
    <>
      {showProgressBar && (
        <motion.div
          style={{ scaleX: scrollProgress }}
          className="absolute bottom-0 h-1 w-full origin-left bg-primary"
        />
      )}
      <header className="relative flex w-full items-center justify-between py-1 px-3">
        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md focus:outline-2 focus:outline-primary"
          onClick={() => setIsOpen(true)}
        >
          <HamburgerIcon />
        </button>
        <ThemeSwitcher />
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="absolute top-0 left-0 z-20 flex h-screen w-9/12 flex-col bg-zinc-100 shadow-sm dark:bg-zinc-900"
              variants={NAV_CONTAINER_VARIANTS}
              initial="initial"
              animate="show"
              exit="exit"
            >
              <button
                type="button"
                className="mx-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md focus:outline-2 focus:outline-primary"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </button>
              <ol className="mt-6 flex flex-col">
                <Link href="/" passHref>
                  <motion.li
                    className={
                      pathname === '/'
                        ? 'mb-2 border-l-4 border-primary py-2 px-3'
                        : 'mb-2 py-2 px-3'
                    }
                    variants={NAV_ITEM_VARIANTS}
                  >
                    <a
                      className={
                        pathname === '/'
                          ? 'font-bold text-zinc-900 transition-colors hover:text-zinc-800 dark:text-zinc-100'
                          : 'font-normal text-zinc-600 transition-colors dark:text-zinc-500 dark:hover:text-zinc-200'
                      }
                    >
                      Home
                    </a>
                  </motion.li>
                </Link>
                {LINKS.map((link) => (
                  <Link key={link.href} href={link.href} passHref>
                    <motion.li
                      className={
                        pathname === link.href
                          ? 'mb-2 border-l-4 border-primary py-2 px-3'
                          : 'mb-2 py-2 px-3'
                      }
                      variants={NAV_ITEM_VARIANTS}
                    >
                      <a
                        className={
                          pathname === link.href
                            ? 'font-bold text-zinc-900 transition-colors hover:text-zinc-800 dark:text-zinc-100'
                            : 'font-normal text-zinc-600 transition-colors dark:text-zinc-500 dark:hover:text-zinc-200'
                        }
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  </Link>
                ))}
              </ol>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default MobileNavigation;
