import React, { createContext, PropsWithChildren } from 'react';

export const FormRadioGroupContext = createContext<null | {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  colorScheme?: string;
}>(null);

interface Props {
  value: string;
  onChange(value: string): void;
  colorScheme?: string;
}

export default function FormRadioGroup({
  value,
  onChange,
  colorScheme,
  children,
}: PropsWithChildren<Props>) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.currentTarget.value);
  }

  return (
    <FormRadioGroupContext.Provider
      value={{ value, onChange: handleChange, colorScheme }}
    >
      {children}
    </FormRadioGroupContext.Provider>
  );
}
