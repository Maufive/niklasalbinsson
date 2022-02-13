import { SearchIcon } from 'components/icons';
import { ChangeEvent } from 'react';
import styles from './input.module.scss';

type InputProps = {
  type: string;
  placeholder?: string;
  disabled?: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ariaLabel?: string;
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  disabled,
  value,
  onChange,
  ariaLabel,
}) => (
  <div className={styles.inputWrapper}>
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={styles.input}
      disabled={disabled}
      onChange={onChange}
      aria-label={ariaLabel}
    />
    <SearchIcon />
  </div>
);

export default Input;
