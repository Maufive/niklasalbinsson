import { InfoIcon } from 'components/icons';
import styles from './aside.module.scss';

enum AsideVariants {
  INFO = 'info',
  WARNING = 'warning',
}

const Aside: React.FC<{ variant?: AsideVariants }> = ({
  variant,
  children,
}) => (
  <aside className={styles.aside}>
    <div className={styles.iconWrapper}>
      <InfoIcon />
    </div>
    <p>{children}</p>
  </aside>
);

export default Aside;
