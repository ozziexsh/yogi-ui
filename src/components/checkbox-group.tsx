import React, { createContext, PropsWithChildren } from 'react';

export const CheckboxGroupContext = createContext<null | {
  value: string[];
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  colorScheme?: string;
}>(null);

interface Props {
  value: string[];
  onChange(value: string[]): void;
  colorScheme?: string;
}

export default function CheckboxGroup({
  value,
  onChange,
  colorScheme,
  children,
}: PropsWithChildren<Props>) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (value.includes(e.currentTarget.value)) {
      onChange(value.filter(val => val !== e.currentTarget.value));
    } else {
      onChange([...value, e.currentTarget.value]);
    }
  }

  return (
    <CheckboxGroupContext.Provider
      value={{ value, onChange: handleChange, colorScheme }}
    >
      {children}
    </CheckboxGroupContext.Provider>
  );
}
