"use client";

import type { Post as PostType } from "contentlayer/generated";
import Link from "next/link";
import { cn } from "utils/classnames";
import { formatDate } from "utils/format-date";

type Props = {
  title: string;
  href: string;
  className?: string;
  description: string;
  publishedAt?: string;
  readingTime?: string;
};

export const Card = ({
  title,
  href,
  className,
  description,
  publishedAt,
  readingTime,
}: Props) => {
  return (
    <li
      className={cn(
        "rounded-xl border border-border shadow-md backdrop-blur-0",
        className,
      )}
    >
      <Link
        title={title}
        href={href}
        passHref
        className="flex h-full w-full transform cursor-pointer flex-col justify-between rounded-xl bg-background/60 p-6 backdrop-blur-3xl text-left hover:ring-primary hover:ring-2"
      >
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        <p className="text-base text-card-muted mb-6">{description}</p>

        <p className="text-sm text-card-muted">
          {publishedAt && (
            <span>
              Published on{" "}
              <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>{" "}
            </span>
          )}
          {readingTime && <span>&middot; {readingTime}</span>}
        </p>
      </Link>
    </li>
  );
};
