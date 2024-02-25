import Link from "next/link";
import React from "react";
import { AnimatedBorder } from "./animated-border";

const Badge = ({ children }: { children: React.ReactNode }) => (
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

export const FeaturedProjectCard = ({
  link,
  title,
  description,
  stack,
}: Props) => (
  <AnimatedBorder borderRadius="0.75rem" duration={30000}>
    <Link
      data-testid="featured-project-link"
      passHref
      href={link}
      title={title}
      className="flex rounded-xl h-full flex-col bg-background/60 backdrop-blur-3xl w-full p-6"
    >
      <h3 className="text-card-foreground mb-2 text-xl font-semibold text-left">
        {title}
      </h3>
      <p className="text-card-muted text-left text-base">{description}</p>
      <ul className="not-prose mt-6 flex list-none flex-wrap gap-2">
        {stack.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </ul>
    </Link>
  </AnimatedBorder>
);
