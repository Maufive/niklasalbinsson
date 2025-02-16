import { formatDate } from "../../utils";

export default function MDXLayout({
  children,
  title,
  subtitle,
  publishedAt,
  backLink,
  github,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  backLink?: React.ReactNode;
  publishedAt: string;
  github?: string;
}) {
  return (
    <article className="flex flex-col gap-8">
      {backLink && <div className="flex justify-start">{backLink}</div>}
      <header className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tighter">{title}</h1>
        {subtitle && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        )}
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(publishedAt)}
          </p>
          {github && (
            <a
              href={github}
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              View on GitHub
            </a>
          )}
        </div>
      </header>

      <div className="prose prose-zinc dark:prose-invert prose-quoteless">{children}</div>
    </article>
  );
}
