import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '../icons';
import ListBoxType, { ListBoxOption } from './types';

export type { ListBoxType, ListBoxOption };

const ListBox: React.FC<ListBoxType> = ({
  options,
  selectedValue,
  defaultValue,
  onChange,
  title,
}) => (
  <Listbox value={selectedValue} onChange={onChange}>
    <div className="relative mt-1">
      <Listbox.Label className="text-sm">{title}</Listbox.Label>
      <Listbox.Button className="relative mt-1 w-full cursor-default rounded-lg bg-zinc-50 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-green-300 dark:bg-zinc-800 sm:text-sm">
        <span className="block truncate">{selectedValue}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <SelectorIcon
            className="h-5 w-5 text-zinc-400 dark:text-zinc-200"
            aria-hidden="true"
          />
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-800 sm:text-sm">
          {options.map((option) => (
            <Listbox.Option
              key={option.value}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 text-sm ${
                  active
                    ? 'bg-indigo-100 text-indigo-900 dark:bg-indigo-900/40 dark:text-indigo-100'
                    : 'text-zinc-900 dark:text-zinc-200'
                }`
              }
              value={option.label}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {option.label}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
);

export default ListBox;
