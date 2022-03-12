/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { RadioContext } from './radio-button-context';
import { RadioGroupProps } from './types';

const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  name,
  onChange,
}) => (
  <RadioContext.Provider value={{ name, onChange }}>
    {children}
  </RadioContext.Provider>
);

export default RadioGroup;
