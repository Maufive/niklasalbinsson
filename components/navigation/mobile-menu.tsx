import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLockedBody, useProgress } from 'utils/hooks';
import styles from './mobile-menu.module.scss';
import ThemeSwitcher from '../theme-switcher/theme-switcher';
import { LINKS } from './links';
import { HamburgerIcon, CloseIcon, HomeIcon } from '../icons';

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
          className={styles.progressBar}
        />
      )}
      <header className={styles.header}>
        <button
          type="button"
          className={styles.iconButton}
          onClick={() => setIsOpen(true)}
        >
          <HamburgerIcon />
        </button>
        <ThemeSwitcher />
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className={styles.nav}
              variants={NAV_CONTAINER_VARIANTS}
              initial="initial"
              animate="show"
              exit="exit"
            >
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </button>
              <ol className={styles.navLinks}>
                <Link href="/" passHref>
                  <motion.li
                    className={`${styles.navLink} ${
                      pathname === '/' ? styles.navLinkActive : ''
                    }`}
                    variants={NAV_ITEM_VARIANTS}
                  >
                    <a>Home</a>
                  </motion.li>
                </Link>
                {LINKS.map((link) => (
                  <Link key={link.href} href={link.href} passHref>
                    <motion.li
                      className={`${styles.navLink} ${
                        pathname === link.href ? styles.navLinkActive : ''
                      }`}
                      variants={NAV_ITEM_VARIANTS}
                    >
                      <a>{link.label}</a>
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
