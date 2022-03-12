import dynamic from 'next/dynamic';

const BasicWidget = dynamic(
  () => import('./framer-motion-layout-animations/basic-widget')
);
const FlexboxWidget = dynamic(
  () => import('./framer-motion-layout-animations/flexbox-widget')
);

const Aside = dynamic(() => import('./aside'));

const MDXComponents = {
  BasicWidget,
  FlexboxWidget,
  Aside,
};

export default MDXComponents;
