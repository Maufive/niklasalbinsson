import styles from './badge.module.scss';

const Badge: React.FC = ({ children }) => (
  <div className={styles.badge}>{children}</div>
);

export default Badge;
