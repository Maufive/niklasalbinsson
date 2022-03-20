const ExternalLink: React.FC<{ href: string }> = ({ children, href }) => (
  <a href={href} className="font-bold text-primary">
    {children}
  </a>
);

export default ExternalLink;
