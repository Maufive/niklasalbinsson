const ExternalLink: React.FC<{ href: string; className?: string }> = ({
  children,
  href,
  className,
}) => (
  <a
    href={href}
    className={`text-base font-bold text-primary transition-colors hover:text-primary-light focus:text-primary-light focus:ring focus:ring-primary-light ${
      className || ''
    }`}
  >
    {children}
  </a>
);

export default ExternalLink;
