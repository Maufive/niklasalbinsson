import { useRouter } from 'next/router';
import useMediaQuery from 'utils/hooks/use-media-query';
import DesktopNavigation from './desktop-menu';
import MobileNavigation from './mobile';

const Navigation = () => {
  const { pathname } = useRouter();
  const showProgressBar = pathname.startsWith('/blog/');
  const isSmaller = useMediaQuery('(max-width: 640px)');

  if (isSmaller) {
    return <MobileNavigation />;
  }

  return (
    <div className="fixed top-0 bottom-0 z-20 flex h-16 w-full items-center justify-center border-b border-zinc-200 bg-zinc-200/50 shadow-sm backdrop-blur-sm transition-colors dark:border-zinc-800 dark:bg-zinc-800/50">
      <DesktopNavigation
        pathname={pathname}
        showProgressBar={showProgressBar}
      />
    </div>
  );
};

export default Navigation;
