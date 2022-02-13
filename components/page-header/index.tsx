import styles from './page-header.module.scss';

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
  <div className={compact ? styles.wrapperCompact : styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    {description && <p className={styles.description}>{description}</p>}
    {children}
  </div>
);

export default PageHeader;
