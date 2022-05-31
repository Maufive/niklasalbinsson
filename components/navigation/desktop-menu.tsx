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
              <Link href="/" passHref>
                <a
                  className={`rounded-md py-1 px-2 transition-colors hover:bg-zinc-200 focus:ring focus:ring-primary dark:hover:bg-zinc-700 ${
                    pathname === '/'
                      ? 'font-bold text-zinc-900 hover:text-zinc-800 dark:text-zinc-100'
                      : 'font-normal text-zinc-600 focus:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-300'
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
                    className={`rounded-md px-2 py-1 transition-colors hover:bg-zinc-200 focus:ring focus:ring-primary dark:hover:bg-zinc-700 ${
                      pathname.includes(link.href)
                        ? 'font-bold text-zinc-900 hover:text-zinc-800 dark:text-zinc-100'
                        : 'font-normal text-zinc-600 focus:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-300'
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
      </div>
    </header>
  );
};

export default DesktopMenu;
