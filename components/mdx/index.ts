import dynamic from 'next/dynamic';

const SimpleListWidget = dynamic(
  () => import('./framer-motion-layout-animations/simple-list-widget')
);
const PositionWidget = dynamic(
  () => import('./framer-motion-layout-animations/position-widget')
);
const BadgeWidget = dynamic(
  () => import('./framer-motion-layout-animations/badges-widget')
);

const Aside = dynamic(() => import('./aside'));
const Link = dynamic(() => import('../links'));

const MDXComponents = {
  SimpleListWidget,
  PositionWidget,
  BadgeWidget,
  Aside,
  Link,
};

export default MDXComponents;