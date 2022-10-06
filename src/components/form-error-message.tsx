import React, { useContext } from 'react';
import { FormControlContext } from './form-control';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export default function FormErrorMessage({ children, ...props }: Props) {
  const formControl = useContext(FormControlContext);

  if (!formControl?.invalid) {
    return null;
  }

  return (
    <p {...props} className={'text-sm font-light text-red-500'}>
      {children}
    </p>
  );
}
