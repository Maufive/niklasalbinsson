import { Switch } from '@headlessui/react';
import { SwitchProps } from './types';

const SwitchToggle: React.FC<SwitchProps> = ({
  onChange,
  toggled,
  label,
  id,
  ...rest
}) => (
  <Switch.Group>
    <div className="flex items-center">
      <Switch
        checked={toggled}
        onChange={onChange}
        className={`${
          toggled ? 'bg-primary' : 'bg-zinc-300'
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
        {...rest}
      >
        <span
          className={`${
            toggled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        />
      </Switch>
      <Switch.Label className="ml-4 text-base">{label}</Switch.Label>
    </div>
  </Switch.Group>
);

export default SwitchToggle;
