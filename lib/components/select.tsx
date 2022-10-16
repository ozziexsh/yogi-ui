import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { FormControlContext } from './form-control';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {}

const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ className, ...props }, ref) => {
    const formControl = useContext(FormControlContext);

    const invalidStyle = formControl?.invalid ? 'border-red-400' : '';

    return (
      <select
        {...props}
        required={formControl?.required || props.required}
        id={props.id || formControl?.id}
        className={twMerge(
          classNames(
            'rounded-md border border-gray-300 bg-white px-2 py-2 text-sm shadow-sm',
            invalidStyle,
            className,
          ),
        )}
      />
    );
  },
);

export default Select;
