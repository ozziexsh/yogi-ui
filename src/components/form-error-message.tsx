import React, { useContext } from 'react';
import { FormControlContext } from './form-control';
import FormHelperMessage from './form-helper-message';

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
    <FormHelperMessage className={'text-red-600'}>{children}</FormHelperMessage>
  );
}
