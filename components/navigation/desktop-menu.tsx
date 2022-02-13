import Link from 'next/link';
import { motion } from 'framer-motion';
import { useProgress } from 'utils/hooks';
import { LINKS } from './links';
import styles from './desktop-menu.module.scss';
import ThemeSwitcher from '../theme-switcher/theme-switcher';

const DesktopMenu: React.FC<{ pathname: string; showProgressBar: boolean }> = ({
  pathname,
  showProgressBar,
}) => {
  const scrollProgress = useProgress();

  return (
    <>
      {showProgressBar && (
        <motion.div
          className={styles.progressBar}
          style={{ scaleX: scrollProgress }}
        />
      )}
      <header className={styles.header}>
        <nav>
          <ol className={styles.navLinks}>
            <li
              className={`${styles.navLink} ${
                pathname === '/' ? styles.navLinkActive : ''
              }`}
            >
              <Link href="/" passHref>
                Home
              </Link>
            </li>

            {LINKS.map((link) => (
              <li
                key={link.href}
                className={`${styles.navLink} ${
                  pathname.includes(link.href) ? styles.navLinkActive : ''
                }`}
              >
                <Link key={link.href} href={link.href} passHref>
                  {link.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <ThemeSwitcher />
      </header>
    </>
  );
};

export default DesktopMenu;
