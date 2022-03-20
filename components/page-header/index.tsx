type PageHeaderProps = {
  title: string | JSX.Element;
  description?: string;
  compact?: boolean;
};

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  children,
  compact,
}) => (
  <div className={`mb-12 sm:mb-20 ${compact ? 'mb-0 sm:mb-10' : ''}`}>
    <h1 className="mb-10 text-3xl font-bold sm:mb-3">{title}</h1>
    {description && <p className="text-md mb-7">{description}</p>}
    {children}
  </div>
);

export default PageHeader;
