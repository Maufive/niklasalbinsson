import Link from 'next/link';

type NavItemProps = {
  isActive: boolean;
  href: string;
};

export const NavItemIcon: React.FC<NavItemProps> = ({
  children,
  isActive,
  href,
}) => (
  <Link passHref href={href}>
    <a
      className={`${
        isActive
          ? 'border-2 border-primary bg-zinc-100 text-primary dark:border-primary-light dark:bg-zinc-900 dark:text-primary-light'
          : 'border border-zinc-400 bg-zinc-100 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300'
      } overflow-hidden rounded-lg px-3 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-75  md:rounded-lg md:px-6 md:py-2`}
    >
      {children}
    </a>
  </Link>
);
