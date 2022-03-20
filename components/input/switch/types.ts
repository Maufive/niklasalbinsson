export interface SwitchProps {
  toggled: boolean;
  label?: React.ReactNode | string;
  id: string;
  ['aria-label']?: string;
  onChange: (value) => void;
}
