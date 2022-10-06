import React from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  variant?: 'default' | 'outline' | 'subtle';
}

const variantMap = {
  default: 'bg-gray-200',
  outline: 'border-gray-400',
  subtle: 'bg-gray-100',
};

export default function Badge({
  children,
  variant = 'default',
  ...props
}: Props) {
  return (
    <span
      {...props}
      className={twMerge(
        classNames(
          'rounded-md border border-transparent py-1 px-2 text-xs font-bold uppercase',
          variantMap[variant],
          props.className,
        ),
      )}
    >
      {children}
    </span>
  );
}
