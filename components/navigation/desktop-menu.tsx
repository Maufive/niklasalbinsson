import Link from 'next/link';
import { motion } from 'framer-motion';
import { useProgress } from 'utils/hooks';
import { LINKS } from './links';
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
          className="absolute bottom-0 h-1 w-full origin-left bg-primary"
          style={{ scaleX: scrollProgress }}
        />
      )}
      <header className="relative mx-auto flex w-full max-w-2xl items-center justify-between">
        <nav>
          <ol className="flex py-0 px-3">
            <li className="mr-4 cursor-pointer transition-colors">
              <Link href="/" passHref>
                <a
                  className={`rounded-md p-1 transition-colors focus:ring focus:ring-primary ${
                    pathname === '/'
                      ? 'font-bold text-zinc-900 hover:text-zinc-800 dark:text-zinc-100'
                      : 'font-normal text-zinc-700 focus:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-200 dark:focus:text-zinc-300'
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>

            {LINKS.map((link) => (
              <li
                key={link.href}
                className="mr-4 cursor-pointer transition-colors"
              >
                <Link key={link.href} href={link.href} passHref>
                  <a
                    className={`rounded-md p-1 transition-colors focus:ring focus:ring-primary ${
                      pathname.includes(link.href)
                        ? 'font-bold text-zinc-900 hover:text-zinc-800 dark:text-zinc-100'
                        : 'font-normal text-zinc-700 focus:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-200 dark:focus:text-zinc-300'
                    }`}
                  >
                    {link.label}
                  </a>
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
