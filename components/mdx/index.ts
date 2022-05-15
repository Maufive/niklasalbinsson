import dynamic from 'next/dynamic';

/* / Framer Motion Layout Animations widgets */
const SimpleListWidget = dynamic(
  () => import('./framer-motion-layout-animations/simple-list-widget')
);
const PositionWidget = dynamic(
  () => import('./framer-motion-layout-animations/position-widget')
);
const BadgeWidget = dynamic(
  () => import('./framer-motion-layout-animations/badges-widget')
);

/* Twitch Carousel widgets */
const TwitchCarousel = dynamic(() => import('./twitch-carousel'));

const Aside = dynamic(() => import('./aside'));
const Link = dynamic(() => import('../links'));
const RoundedImage = dynamic(() => import('./images'));
const BlurImage = dynamic(() => import('../image/index'));

const MDXComponents = {
  SimpleListWidget,
  PositionWidget,
  BadgeWidget,
  Aside,
  Link,
  Image: RoundedImage,
  BlurImage,
  TwitchCarousel,
};

export default MDXComponents;
