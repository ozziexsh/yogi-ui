import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {}

export default function Table({ children, ...props }: Props) {
  return <table {...props}>{children}</table>;
}
