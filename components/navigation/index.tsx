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
    <DesktopNavigation pathname={pathname} showProgressBar={showProgressBar} />
  );
};

export default Navigation;
