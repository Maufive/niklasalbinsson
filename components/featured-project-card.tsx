import Link from "next/link";

const Badge: React.FC = ({ children }) => (
  <li className="inline-flex  items-center rounded-full bg-accent px-3 py-1">
    <p className="text-xs font-semibold text-foreground">{children}</p>
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
    className="relative block rounded-xl border border-border shadow-md backdrop-blur-0"
  >
    <div className="flex h-full flex-col justify-between rounded-xl bg-background/60 p-6 backdrop-blur-3xl">
      <h3 className="text-card-foreground mb-2 text-xl font-semibold">
        {title}
      </h3>
      <p className="text-base text-card-muted">{description}</p>
      <ul className="not-prose mt-6 flex list-none flex-wrap gap-2">
        {stack.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </ul>
    </div>
  </Link>
);
