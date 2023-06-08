import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
  href: string;
};

export const BreadcrumbLink: React.FC<Props> = ({ children, href }) => (
  <Link
    passHref
    href={href}
    className="flex w-fit items-center text-zinc-400 transition-colors hover:text-zinc-300"
  >
    <ArrowLeftIcon className="mr-2 h-4 w-4" />
    {children}
  </Link>
);
