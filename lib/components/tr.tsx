import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {}

export default function Tr({ children, ...props }: Props) {
  return <tr {...props}>{children}</tr>;
}
