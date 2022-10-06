import React, { createContext, PropsWithChildren } from 'react';

export const FormCheckboxGroupContext = createContext<null | {
  value: string[];
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}>(null);

interface Props {
  value: string[];
  onChange(value: string[]): void;
}

export default function FormCheckboxGroup({
  value,
  onChange,
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
    <FormCheckboxGroupContext.Provider
      value={{ value, onChange: handleChange }}
    >
      {children}
    </FormCheckboxGroupContext.Provider>
  );
}
