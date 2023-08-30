import Link from 'next/link';

const Badge: React.FC = ({ children }) => (
  <li className="inline-flex  items-center rounded-full bg-zinc-800 px-3 py-1">
    <p className="text-xs font-semibold text-zinc-200">{children}</p>
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
    data-testid="featured-project-link"
    passHref
    href={link}
    title={title}
    className="relative block rounded-xl border border-zinc-50/10 shadow-md backdrop-blur-0 transition-colors hover:border-primary-dark"
  >
    <div className="flex h-full flex-col justify-between rounded-xl bg-zinc-900/60 p-6 backdrop-blur-3xl">
      <h3 className="text-zinc-2000 mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-base text-zinc-400">{description}</p>
      <ul className="not-prose mt-6 flex list-none flex-wrap gap-2">
        {stack.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </ul>
    </div>
  </Link>
);
