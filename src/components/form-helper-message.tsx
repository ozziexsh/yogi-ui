import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export default function FormHelperMessage({ children, ...props }: Props) {
  return (
    <p {...props} className={'text-sm font-light text-gray-500'}>
      {children}
    </p>
  );
}
