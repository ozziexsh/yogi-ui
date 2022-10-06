import React from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

interface Props
  extends React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  > {}

export default function Td({ children, ...props }: Props) {
  return (
    <td
      {...props}
      className={twMerge(
        classNames('border-b border-b-gray-200 px-4 py-4', props.className),
      )}
    >
      {children}
    </td>
  );
}
