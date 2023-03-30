import { SearchIcon } from 'components/icons';
import { ChangeEvent } from 'react';

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
  <div className="relative flex items-center">
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className="w-96 max-w-full appearance-none rounded-md border border-zinc-200 bg-zinc-200 py-2 px-3 pl-10 text-base text-zinc-600 shadow-md"
      disabled={disabled}
      onChange={onChange}
      aria-label={ariaLabel}
    />
    <SearchIcon className="absolute left-3 h-5 w-5 stroke-zinc-600" />
  </div>
);

export default Input;
