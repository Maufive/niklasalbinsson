import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'components/icons';

type Props = {
  href: string;
};

const iconAnimation = {
  hover: {
    opacity: 1,
    x: 5,
  },
  focus: {
    opacity: 1,
    x: 5,
  },
};

const InternalLink: React.FC<Props> = ({ children, href }) => (
  <Link href={href} passHref>
    <motion.a
      whileHover="hover"
      whileFocus="focus"
      className="text-md flex w-fit items-center rounded-md p-1 text-primary transition-colors hover:text-primary-light focus:text-primary-light focus:ring focus:ring-primary-light"
    >
      {children}
      <motion.span variants={iconAnimation} className="opacity-0">
        <ChevronRight />
      </motion.span>
    </motion.a>
  </Link>
);

export default InternalLink;
