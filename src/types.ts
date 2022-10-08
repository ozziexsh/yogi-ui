import React from 'react';

export interface IconProps {
  className: string;
}
export type IconType = (props: IconProps) => JSX.Element;

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type RecursivePartial<Obj> = {
  [Prop in keyof Obj]?: Obj[Prop] extends (infer U)[]
    ? RecursivePartial<U>[]
    : Obj[Prop] extends object
    ? RecursivePartial<Obj[Prop]>
    : Obj[Prop];
};
