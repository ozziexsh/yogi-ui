import React, { useContext } from 'react';
import { FormControlContext } from './form-control';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

interface Props
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export default function FormLabel({ children, className, ...props }: Props) {
  const formControl = useContext(FormControlContext);

  return (
    <label
      {...props}
      htmlFor={props.htmlFor || formControl?.id}
      className={twMerge(classNames('font-semibold', className))}
    >
      <span className={'inline-block'}>{children}</span>
      {formControl?.required ? (
        <span className={'ml-2 inline-block text-red-400'}>*</span>
      ) : null}
    </label>
  );
}
