import { ArrowLeftIcon } from '@heroicons/react/outline';
import Link from 'next/link';

type Props = {
  href: string;
};

export const BreadcrumbLink: React.FC<Props> = ({ children, href }) => (
  <Link passHref href={href}>
    <a className="mb-6 flex w-fit items-center text-zinc-400 transition-colors hover:text-zinc-300">
      <ArrowLeftIcon className="mr-2 h-4 w-4" />
      {children}
    </a>
  </Link>
);
