import React from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export default function FormHelperMessage({ children, ...props }: Props) {
  return (
    <p
      {...props}
      className={twMerge(classNames('text-sm text-gray-500', props.className))}
    >
      {children}
    </p>
  );
}
