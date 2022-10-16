import React from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

interface Props
  extends React.DetailedHTMLProps<
    React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  > {}

export default function Th({ children, ...props }: Props) {
  return (
    <th
      {...props}
      className={twMerge(
        classNames(
          'px-4 py-2 text-left text-sm font-semibold uppercase text-neutral-700',
          props.className,
        ),
      )}
    >
      {children}
    </th>
  );
}
