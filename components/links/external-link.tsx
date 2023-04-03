const ExternalLink: React.FC<{ href: string; className?: string }> = ({
  children,
  href,
  className,
}) => (
  <a
    href={href}
    className={`text-base font-bold text-primary transition-colors hover:text-primary-dark focus:text-primary-dark focus:ring focus:ring-primary-dark ${
      className || ''
    }`}
  >
    {children}
  </a>
);

export default ExternalLink;
