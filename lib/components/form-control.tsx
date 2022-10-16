import React, { createContext, useId } from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  invalid?: boolean;
  required?: boolean;
}

export const FormControlContext = createContext({
  invalid: false,
  required: false,
  id: '',
});

export default function FormControl({
  children,
  invalid = false,
  required = false,
  ...props
}: Props) {
  const id = useId();

  return (
    <FormControlContext.Provider value={{ invalid, required, id }}>
      <div className={'flex flex-col space-y-1'} {...props}>
        {children}
      </div>
    </FormControlContext.Provider>
  );
}
