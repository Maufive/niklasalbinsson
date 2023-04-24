import Link from 'next/link';

const Badge: React.FC = ({ children }) => (
  <li className="inline-flex items-center rounded-full bg-zinc-800 px-2.5 py-1">
    <p className="text-xs font-semibold text-zinc-100">{children}</p>
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
    className="relative block rounded-xl border border-zinc-50/10 shadow-md backdrop-blur-0"
  >
    <div className="prose prose-invert flex h-full flex-col justify-between rounded-xl bg-zinc-900/60 p-6 backdrop-blur-3xl sm:prose-invert lg:prose-lg">
      <h3 className="text-xl font-semibold text-zinc-200 transition duration-200 lg:group-hover:text-zinc-50 lg:group-focus:text-zinc-50">
        {title}
      </h3>
      <p className="text-base text-zinc-300 transition duration-200 lg:group-hover:text-zinc-200 lg:group-focus:text-zinc-200">
        {description}
      </p>
      <div className="not-prose mt-6">
        <ul className="flex list-none gap-2">
          {stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </ul>
      </div>
    </div>
  </Link>
);
