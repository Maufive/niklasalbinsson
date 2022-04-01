import { useRouter } from 'next/router';
import { UserIcon, HomeIcon, BookOpenIcon } from '@heroicons/react/outline';
import { useMediaQuery } from 'utils/hooks';
import SubMenuButton, { ThemeSwitcherButton } from './sub-menu-button';
import { Wrapper } from './nav-bar';
import { NavItemIcon } from './nav-item';

const Navbar = () => {
  const { pathname } = useRouter();
  const isSmaller = useMediaQuery('(max-width: 768px)');

  return (
    <Wrapper>
      <div className="flex items-center space-x-4">
        <NavItemIcon href="/" isActive={pathname === '/'}>
          {isSmaller ? <HomeIcon className="h-5 w-5" /> : 'Home'}
        </NavItemIcon>
        <NavItemIcon href="/blog" isActive={pathname === '/blog'}>
          {isSmaller ? <BookOpenIcon className="h-5 w-5" /> : 'Blog'}
        </NavItemIcon>
        <NavItemIcon href="/about" isActive={pathname === '/about'}>
          {isSmaller ? <UserIcon className="h-5 w-5" /> : 'About'}
        </NavItemIcon>
      </div>
      <div className="inline-block h-8 w-px bg-zinc-400 dark:bg-zinc-600 md:mx-4" />
      <div className="flex items-center justify-end md:space-x-4">
        {!isSmaller && <ThemeSwitcherButton hasSubmenuContext={false} />}
        <SubMenuButton />
      </div>
    </Wrapper>
  );
};

export default Navbar;
