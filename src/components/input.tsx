import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { FormControlContext } from './form-control';
import useYogiTheme from '../hooks/use-yogi-theme';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export default function Input({ className, ...props }: Props) {
  const theme = useYogiTheme();
  const formControl = useContext(FormControlContext);
  const invalidStyle = formControl?.invalid ? 'border-red-500' : '';

  return (
    <input
      type="text"
      {...props}
      required={formControl?.required || props.required}
      id={props.id || formControl?.id}
      className={twMerge(
        classNames(theme.components.input.className, invalidStyle, className),
      )}
    />
  );
}
