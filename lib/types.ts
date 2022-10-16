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

// https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/#building-simple-polymorphic-component
// https://github.com/ohansemmanuel/polymorphic-react-component/blob/master/06.tsx
export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };
