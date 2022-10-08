import React, { useContext } from 'react';
import { FormControlContext } from './form-control';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import useYogiTheme from '../hooks/use-yogi-theme';

export const labelTheme = {
  className: 'text-sm font-medium text-gray-700',
};

interface Props
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export default function Label({ children, className, ...props }: Props) {
  const formControl = useContext(FormControlContext);
  const theme = useYogiTheme();

  return (
    <label
      {...props}
      htmlFor={props.htmlFor || formControl?.id}
      className={twMerge(
        classNames(theme.components.label.className, className),
      )}
    >
      <span className={'inline-block'}>{children}</span>
      {formControl?.required ? (
        <span className={'ml-1 inline-block text-red-400'}>*</span>
      ) : null}
    </label>
  );
}
