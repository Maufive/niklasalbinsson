import Link from 'next/link';

const Badge: React.FC = ({ children }) => (
  <li className="inline-flex items-center rounded-full bg-zinc-800 px-2.5 py-1">
    <h5 className="text-xs font-semibold text-zinc-100">{children}</h5>
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
      <div className="prose prose-invert flex h-full flex-col justify-between rounded-xl bg-zinc-900 p-6 transition-colors sm:prose-invert lg:prose-lg">
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
    </div>
  </Link>
);
