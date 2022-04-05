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
  <div className={`mb-12 sm:mb-20 ${compact ? 'mb-0 sm:mb-10' : ''} sm:px-4`}>
    <h1 className="mb-10 text-3xl font-bold leading-9 sm:mb-3 2xl:text-5xl">
      {title}
    </h1>
    {description && (
      <p className="mb-8 text-base leading-7 text-zinc-700 dark:text-zinc-100">
        {description}
      </p>
    )}
    {children}
  </div>
);

export default PageHeader;
