import React from 'react';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '../types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import useYogiTheme from '../hooks/use-yogi-theme';

type LinkProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  { variant?: 'underline' | string; colorScheme?: string; className?: string }
>;

type LinkComponent = <C extends React.ElementType = 'a'>(
  props: LinkProps<C>,
) => React.ReactElement | null;

const Link: LinkComponent = React.forwardRef(
  <C extends React.ElementType = 'a'>(
    { as, color, children, ...props }: LinkProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'a';
    const theme = useYogiTheme();
    const variant = props.variant || theme.components.link.defaultVariant;
    const colorScheme = props.colorScheme || theme.colorScheme;
    const className = theme.components.link.variants[variant](colorScheme);

    return (
      <Component
        {...props}
        className={twMerge(classNames(className, props.className))}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);

export default Link;
