import styles from './aside.module.scss';

enum AsideVariants {
  INFO = 'info',
  WARNING = 'warning',
}

const Aside: React.FC<{ variant?: AsideVariants }> = ({
  variant,
  children,
}) => <aside className={styles.aside}>{children}</aside>;

export default Aside;
