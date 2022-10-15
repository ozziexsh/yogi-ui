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

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    const theme = useYogiTheme();
    const formControl = useContext(FormControlContext);
    const invalidStyle = formControl?.invalid ? 'border-red-500' : '';

    return (
      <input
        type="text"
        {...props}
        ref={ref}
        required={formControl?.required || props.required}
        id={props.id || formControl?.id}
        className={twMerge(
          classNames(theme.components.Input.className, invalidStyle, className),
        )}
      />
    );
  },
);

export default Input;
