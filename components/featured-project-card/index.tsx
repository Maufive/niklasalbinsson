import { ChevronRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const ListItem: React.FC = ({ children }) => (
  <li className="flex items-center  text-xs font-bold text-zinc-300 transition duration-200 group-hover:text-zinc-300 md:text-sm">
    <ChevronRightIcon className="mr-1 h-4 w-4 text-secondary" />
    {children}
  </li>
);

type Props = {
  link: string;
  title: string;
  description: string;
  stack: string[];
};

export const FeaturedProjectCard: React.FC<Props> = ({
  link,
  title,
  description,
  stack,
}) => (
  <Link
    passHref
    href={link}
    title={`Check out my project ${title}`}
    className="group relative block lg:transition lg:duration-1000 lg:hover:scale-[1.02] lg:hover:duration-200 lg:focus:scale-[1.02] lg:focus:duration-200"
  >
    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 opacity-50 blur group-focus:opacity-100 lg:transition lg:duration-1000 lg:group-hover:opacity-100 lg:group-hover:duration-200 lg:group-focus:duration-200" />
    <div className="w-full transform cursor-pointer rounded-xl bg-transparent p-1">
      <div className="flex h-full flex-col justify-between rounded-xl bg-zinc-900 p-6 transition-colors">
        <h3 className="mb-2 text-xl font-semibold text-zinc-200 transition duration-200 lg:group-hover:text-zinc-50 lg:group-focus:text-zinc-50 xl:mb-4">
          {title}
        </h3>
        <p className="text-base text-zinc-300 transition duration-200 lg:group-hover:text-zinc-200 lg:group-focus:text-zinc-200">
          {description}
        </p>
        <div className="mt-6">
          <ul className="flex list-none flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0">
            {stack.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Link>
);
