import { RadioGroup } from '@headlessui/react';

interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value: string;
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value }) => (
  <RadioGroup.Option value={value}>
    {({ checked }) => (
      <div className="flex items-center">
        <span
          className={`${
            checked ? 'border-4 border-primary' : ''
          } mr-2 inline-block h-5 w-5 rounded-full bg-zinc-100 shadow-md`}
        />
        <label
          htmlFor="start"
          className="mr-2 inline-block cursor-pointer text-sm"
        >
          {label}
        </label>
      </div>
    )}
  </RadioGroup.Option>
);

export default RadioButton;
