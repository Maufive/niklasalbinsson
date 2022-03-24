import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLockedBody, useProgress } from 'utils/hooks';
import ThemeSwitcher from '../theme-switcher/theme-switcher';
import { HamburgerIcon } from '../icons';
import DrawerMenu from './drawer-menu';

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
        <DrawerMenu
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          pathname={pathname}
        />
      </header>
    </>
  );
};

export default MobileNavigation;
