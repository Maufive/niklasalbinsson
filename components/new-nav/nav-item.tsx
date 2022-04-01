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
          ? 'border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200'
          : 'border-zinc-400 bg-zinc-200 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300'
      } overflow-hidden rounded-xl border px-3 py-3 text-sm transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-75 hover:dark:border-zinc-600 hover:dark:bg-zinc-800 hover:dark:text-zinc-200 md:rounded-lg md:px-6 md:py-2`}
    >
      {children}
    </a>
  </Link>
);
