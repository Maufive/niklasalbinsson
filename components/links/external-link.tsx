import styles from './external-link.module.scss';

const ExternalLink: React.FC<{ href: string }> = ({ children, href }) => (
  <a href={href} className={styles.externalLink}>
    {children}
  </a>
);

export default ExternalLink;
