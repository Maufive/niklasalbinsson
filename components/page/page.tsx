import { motion } from 'framer-motion';
import { FC } from 'react';

const variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
};

const PageTransition: FC = ({ children }): JSX.Element => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="initial"
    variants={variants}
    transition={{
      type: 'spring',
      duration: 0.25,
    }}
  >
    {children}
  </motion.div>
);

const Page: FC = ({ children }): JSX.Element => (
  <PageTransition>
    <main className="relative mx-auto max-w-2xl space-y-20 px-4 py-6 sm:pt-28 md:px-0 2xl:space-y-32">
      {children}
    </main>
  </PageTransition>
);

export default Page;
