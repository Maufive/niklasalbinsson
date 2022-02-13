import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NowPlaying from '../now-playing/now-playing';
import styles from './footer.module.scss';

const CURRENT_YEAR = new Date().getFullYear();

const INTERNAL_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

const EXTERNAL_LINKS = [
  {
    label: 'Email',
    href: 'mailto:albinssonniklas@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Maufive',
  },
  {
    label: 'LinkedIn',
    href: 'https://se.linkedin.com/in/niklas-albinsson-6a9306137',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/albinssonniklas',
  },
];

const FooterNavigation = () => {
  const [today, setToday] = useState<string>('');
  const { pathname } = useRouter();

  useEffect(() => {
    if (window) {
      const lang = window?.navigator?.language;
      const day = new Intl.DateTimeFormat(lang, {
        dateStyle: 'full',
      })
        .format(new Date())
        .split(', ');

      setToday(day[0].toLowerCase());
    }
  }, []);

  return (
    <footer className={styles.footer}>
      <NowPlaying />
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          {INTERNAL_LINKS.map((link) => (
            <li
              key={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.navLinkActive : ''
              }`}
            >
              <Link href={link.href} passHref>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.navLinks}>
          {EXTERNAL_LINKS.map((link) => (
            <li
              key={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.navLinkActive : ''
              }`}
            >
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className={styles.copyrightLabel}>
        © <span>Niklas Albinsson</span> {CURRENT_YEAR} | Have a nice {today}!
      </p>
    </footer>
  );
};

export default FooterNavigation;
