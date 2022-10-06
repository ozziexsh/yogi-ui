import React, { createContext, PropsWithChildren } from 'react';

export const FormRadioGroupContext = createContext<null | {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}>(null);

interface Props {
  value: string;
  onChange(value: string): void;
}

export default function FormRadioGroup({
  value,
  onChange,
  children,
}: PropsWithChildren<Props>) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.currentTarget.value);
  }

  return (
    <FormRadioGroupContext.Provider value={{ value, onChange: handleChange }}>
      {children}
    </FormRadioGroupContext.Provider>
  );
}
