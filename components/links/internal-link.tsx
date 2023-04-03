import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  hideIcon?: boolean;
};

const InternalLink: React.FC<Props> = ({ children, href, hideIcon }) => (
  <Link
    href={href}
    passHref
    className="group inline-flex items-center overflow-hidden pr-4 text-primary transition hover:text-primary-dark"
  >
    {children}
    {!hideIcon && (
      <svg
        className="-mr-1 ml-2 mt-0.5 stroke-primary stroke-1 transition group-hover:stroke-primary-dark"
        fill="none"
        viewBox="0 0 10 10"
        aria-hidden="true"
      >
        <path
          className="translate-x-[-2px] opacity-0 transition group-hover:translate-x-[0px] group-hover:opacity-100"
          d="M0 5h7"
        />
        <path
          className="transition group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        />
      </svg>
    )}
  </Link>
);

export default InternalLink;
