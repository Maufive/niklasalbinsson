export type ListBoxOption = {
  label: string;
  value: string;
};

type ListBoxType = {
  options: ListBoxOption[];
  selectedValue: string | undefined;
  defaultValue?: string;
  onChange: (value: string) => void;
  title?: string;
};

export default ListBoxType;
