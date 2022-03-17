import styles from './switch.module.scss';
import { SwitchProps } from './types';

const Switch: React.FC<SwitchProps> = ({
  toggled,
  id,
  label,
  onChange,
  ...rest
}) => (
  <div className={styles.switchWrapper}>
    <input
      className={styles.switch}
      id={id}
      type="checkbox"
      checked={toggled}
      aria-checked={toggled}
      aria-labelledby={id}
      role="switch"
      onChange={onChange}
      {...rest}
    />
    {label ? (
      <label className={styles.switchLabel} htmlFor={id}>
        {label}
      </label>
    ) : null}
  </div>
);

export default Switch;
