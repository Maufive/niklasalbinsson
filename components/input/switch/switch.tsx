import styles from './switch.module.scss';
import { SwitchProps } from './types';

const Switch: React.FC<SwitchProps> = ({ toggled, id, label }) => (
  <div className={styles.switchWrapper}>
    <input
      className={styles.switch}
      id={id}
      type="checkbox"
      checked={toggled}
      aria-checked={toggled}
      role="switch"
    />
    {label ? <label htmlFor={id}>{label}</label> : null}
  </div>
);

export default Switch;
