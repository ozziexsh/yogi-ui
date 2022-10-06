import React from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > {}

export default function Thead({ children, ...props }: Props) {
  return (
    <thead
      {...props}
      className={twMerge(
        classNames('border-b border-b-gray-200', props.className),
      )}
    >
      {children}
    </thead>
  );
}
