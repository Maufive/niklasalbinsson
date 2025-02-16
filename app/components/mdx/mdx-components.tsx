import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";
import DockWidget from "./macos-dock";
import CalendarWidget from "./google-calendar-scheduler";
import TwitchCarousel from "./twitch-carousel";
import { MDXComponents } from "mdx/types";
import BadgesWidget from "./framer-motion-widgets/badges-widget";
import CollapsingHeaderWidget from "./framer-motion-widgets/collapsing-header-widget";
import PositionWidget from "./framer-motion-widgets/position-widget";
import SimpleListWidget from "./framer-motion-widgets/simple-list-widget";
import UseTransformWidget from "./framer-motion-widgets/use-transform-widget";
import { Code } from "./code";

type CustomLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

function CustomLink({ href, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a href={href} {...props} />;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}

type RoundedImageProps = Omit<ImageProps, "alt"> & { alt: string };

function RoundedImage(props: RoundedImageProps) {
  return <Image className="rounded-lg" {...props} />;
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

type HeadingProps = {
  children: string;
};

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Heading: React.FC<HeadingProps> = ({ children }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  DockWidget,
  CalendarWidget,
  TwitchCarousel,
  BadgesWidget,
  CollapsingHeaderWidget,
  PositionWidget,
  SimpleListWidget,
  UseTransformWidget,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: Record<string, React.ComponentType<unknown>>;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={
        {
          ...components,
          ...(props.components || {}),
        } as MDXComponents
      }
    />
  );
}
