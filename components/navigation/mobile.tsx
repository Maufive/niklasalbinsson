import { useRouter } from 'next/router';
import { UserIcon, HomeIcon, BookOpenIcon } from '@heroicons/react/outline';
import SubMenu from './mobile-sub-menu';
import { NavItemIcon } from './mobile-item';

const BottomNavigation: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <div className="blurred-transparent-background fixed bottom-2 left-1/2 z-10 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-2xl border border-zinc-400  p-2 dark:border-zinc-600 md:w-fit md:rounded-lg">
      <div className="flex items-center space-x-4">
        <NavItemIcon href="/" isActive={pathname === '/'}>
          <HomeIcon className="h-5 w-5" />
        </NavItemIcon>
        <NavItemIcon href="/blog" isActive={pathname.includes('/blog')}>
          <BookOpenIcon className="h-5 w-5" />
        </NavItemIcon>
        <NavItemIcon href="/about" isActive={pathname === '/about'}>
          <UserIcon className="h-5 w-5" />
        </NavItemIcon>
      </div>
      <div className="inline-block h-8 w-px bg-zinc-400 dark:bg-zinc-600 md:mx-4" />
      <div className="flex items-center justify-end">
        <SubMenu />
      </div>
    </div>
  );
};

const MobileNavigation: React.FC = () => <BottomNavigation />;

export default MobileNavigation;
