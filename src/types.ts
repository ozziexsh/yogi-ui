import React from 'react';

export interface IconProps {
  className: string;
}
export type IconType = (props: IconProps) => JSX.Element;

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
