import React, { useContext } from 'react';
import { RadioContext } from './radio-button-context';
import styles from './radio-button.module.scss';

interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  isSelected?: boolean;
  value: string;
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  value,
  checked,
  ...rest
}) => {
  const radioContext = useContext(RadioContext);

  if (!radioContext) {
    // eslint-disable-next-line no-console
    console.warn('Radio.Item must be rendered within a Radio.Group component!');
    return null;
  }

  const { name, onChange } = radioContext;

  return (
    <div className={styles.radioButtonWrapper}>
      <input
        type="radio"
        id={id}
        name={name}
        aria-checked={checked}
        checked={checked}
        aria-label={label}
        className={styles.radioButton}
        value={value}
        onChange={(event) => onChange(event)}
        {...rest}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
