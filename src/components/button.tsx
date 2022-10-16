import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import React from 'react';
import useYogiTheme from '../hooks/use-yogi-theme';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '../types';
import Spinner from './spinner';

export interface ButtonCommonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'solid' | 'subtle' | 'outline' | 'ghost' | 'link' | string;
  colorScheme?: string;
  loading?: boolean;
}

interface Props extends ButtonCommonProps {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  Props
>;

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C>,
) => React.ReactElement | null;

const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      variant,
      colorScheme,
      className,
      loading,
      children,
      leftIcon,
      rightIcon,
      as,
      ...props
    }: ButtonProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'button';
    const theme = useYogiTheme();
    const loadOnRight = !!rightIcon;
    const buttonStyle = theme.components.Button;
    const resolvedVariant = variant || buttonStyle.variant;
    const variantClassName =
      resolvedVariant &&
      buttonStyle.variants?.[resolvedVariant]?.(
        colorScheme || buttonStyle.colorScheme || theme.colorScheme,
      );

    return (
      <Component
        {...props}
        ref={ref}
        disabled={loading || props.disabled}
        className={twMerge(
          classNames(buttonStyle.className, variantClassName, className),
        )}
      >
        {loading && !loadOnRight ? <Spinner className={'h-3 w-3'} /> : leftIcon}
        <span>{children}</span>
        {loading && loadOnRight ? <Spinner className={'h-3 w-3'} /> : rightIcon}
      </Component>
    );
  },
);

export default Button;
