import { useRouter } from 'next/router';
import useMediaQuery from 'utils/hooks/use-media-query';
import DesktopNavigation from './desktop-menu';
import MobileNavigation from './mobile-menu';
import styles from './index.module.scss';

const Navigation = () => {
  const { pathname } = useRouter();
  const showProgressBar = pathname.startsWith('/blog/');
  const isSmaller = useMediaQuery('(max-width: 768px)');

  return (
    <div className={styles.wrapper}>
      {isSmaller ? (
        <MobileNavigation
          pathname={pathname}
          showProgressBar={showProgressBar}
        />
      ) : (
        <DesktopNavigation
          pathname={pathname}
          showProgressBar={showProgressBar}
        />
      )}
    </div>
  );
};

export default Navigation;
