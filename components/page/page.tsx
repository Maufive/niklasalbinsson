import { FC } from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
};

const PageTransition: FC = ({ children }): JSX.Element => (
  <motion.div initial="initial" animate="enter" variants={variants}>
    {children}
  </motion.div>
);

const Page: FC = ({ children }): JSX.Element => (
  <main className="relative mx-auto max-w-2xl px-4 py-6 sm:pt-28">
    <PageTransition>{children}</PageTransition>
  </main>
);

export default Page;
