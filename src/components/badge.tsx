import React from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  variant?: 'solid' | 'outline' | 'subtle';
  colorScheme?: string;
}

const variantMap = {
  solid: (color: string) => `bg-${color}-700 text-white shadow-sm`,
  outline: (color: string) => `border-${color}-700 text-${color}-700`,
  subtle: (color: string) => `bg-${color}-100 text-${color}-700`,
};

export default function Badge({
  children,
  variant = 'solid',
  colorScheme = 'gray',
  ...props
}: Props) {
  return (
    <span
      {...props}
      className={twMerge(
        classNames(
          'rounded-md border border-transparent py-1 px-2 text-xs font-bold uppercase',
          variantMap[variant](colorScheme),
          props.className,
        ),
      )}
    >
      {children}
    </span>
  );
}
