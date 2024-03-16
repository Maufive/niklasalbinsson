import { useMDXComponent } from "next-contentlayer/hooks";
import dynamic from "next/dynamic";

/* / Framer Motion Layout Animations widgets */
const SimpleListWidget = dynamic(
  () => import("./framer-motion-layout-animations/simple-list-widget"),
);
const PositionWidget = dynamic(
  () => import("./framer-motion-layout-animations/position-widget"),
);
const BadgeWidget = dynamic(
  () => import("./framer-motion-layout-animations/badges-widget"),
);

/* Twitch Carousel widgets */
const TwitchCarousel = dynamic(() => import("./twitch-carousel"));

/* Framer Motion Values widgets */
const UseTransformWidget = dynamic(
  () => import("./framer-motion-values/use-transform-widget"),
);
const CollapsingHeaderWidget = dynamic(
  () => import("./framer-motion-values/collapsing-header-widget"),
);

const DockWidget = dynamic(() => import("./macos-dock"));

/* Shared widgets */
const Aside = dynamic(() => import("./aside"));
const Link = dynamic(() => import("../links"));
const ExternalLink = dynamic(() => import("../links/external-link"));
const RoundedImage = dynamic(() => import("./images"));
const BlurImage = dynamic(() => import("../image"));

const MDXComponents = {
  SimpleListWidget,
  PositionWidget,
  BadgeWidget,
  Aside,
  Link,
  Image: RoundedImage,
  BlurImage,
  TwitchCarousel,
  ExternalLink,
  UseTransformWidget,
  CollapsingHeaderWidget,
  DockWidget,
};

export default MDXComponents;

type MdxProps = {
  code: string;
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={MDXComponents} />;
}
