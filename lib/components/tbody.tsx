import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > {}

export default function Tbody({ children, ...props }: Props) {
  return <tbody {...props}>{children}</tbody>;
}
