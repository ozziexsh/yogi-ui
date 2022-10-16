import React, { createContext, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

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
      <div
        {...props}
        className={twMerge(
          classNames('flex flex-col space-y-1', props.className),
        )}
      >
        {children}
      </div>
    </FormControlContext.Provider>
  );
}
