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
  <div
    className={`prose prose-invert sm:prose-invert lg:prose-lg sm:mb-20 ${
      compact ? 'mb-0 sm:mb-10' : ''
    }`}
  >
    <h1 className="font-serif font-bold">{title}</h1>
    {description && <p className="text-base text-zinc-300">{description}</p>}
    {children}
  </div>
);

export default PageHeader;
