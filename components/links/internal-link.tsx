import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  href: string;
  children: React.ReactNode;
};

const line = {
  initial: {
    opacity: 0,
    x: -2,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      x: {
        type: 'spring',
        bounce: 0.65,
      },
    },
  },
};

const chevron = {
  initial: {
    x: 0,
  },
  enter: {
    x: 3,
    transition: { type: 'spring', bounce: 0.65 },
  },
};

const InternalLink: React.FC<Props> = ({ children, href }) => (
  <Link href={href} passHref>
    <motion.a
      initial="initial"
      whileHover="enter"
      whileFocus="enter"
      className="inline-flex items-center py-1.5 pr-4 text-primary"
    >
      {children}
      <motion.svg
        className="mt-0.5 ml-2 -mr-1 stroke-primary stroke-1"
        fill="none"
        viewBox="0 0 10 10"
        aria-hidden="true"
      >
        <motion.path variants={line} d="M0 5h7" />
        <motion.path variants={chevron} d="M1 1l4 4-4 4" />
      </motion.svg>
    </motion.a>
  </Link>
);

export default InternalLink;
