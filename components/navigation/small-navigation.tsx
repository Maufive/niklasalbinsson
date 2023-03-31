import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserIcon, HomeIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import SubMenu from './mobile-sub-menu';

type NavItemProps = {
  isActive: boolean;
  href: string;
};

export const NavItemIcon: React.FC<NavItemProps> = ({
  children,
  isActive,
  href,
}) => (
  <Link
    passHref
    href={href}
    className={`${
      isActive
        ? 'border-2 border-primary-light bg-zinc-900 text-primary-light'
        : 'border border-zinc-700 bg-zinc-900 text-zinc-300'
    } overflow-hidden rounded-lg px-3 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-75  md:rounded-lg md:px-6 md:py-2`}
  >
    {children}
  </Link>
);

const SmallNavigation: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <div className="fixed bottom-2 left-1/2 z-10 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-2xl border border-zinc-600 bg-zinc-900/50 p-2  backdrop-blur-md  md:w-fit md:rounded-lg">
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
      <div className="inline-block h-8 w-px bg-zinc-600 md:mx-4" />
      <div className="flex items-center justify-end">
        <SubMenu />
      </div>
    </div>
  );
};

export default SmallNavigation;
