import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { FormControlContext } from './form-control';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, ...props }, ref) => {
    const formControl = useContext(FormControlContext);

    const invalidStyle = formControl?.invalid ? 'border-red-500' : '';

    return (
      <textarea
        {...props}
        ref={ref}
        required={formControl?.required || props.required}
        id={props.id || formControl?.id}
        className={twMerge(
          classNames(
            'rounded-md border border-gray-300 px-2 py-1 text-sm shadow-sm',
            invalidStyle,
            className,
          ),
        )}
      />
    );
  },
);

export default Textarea;
