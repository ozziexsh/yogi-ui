import {
  IconType,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../types';
import useYogiTheme from '../hooks/use-yogi-theme';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import React, { createElement } from 'react';
import { ButtonCommonProps } from './button';

interface IconButtonProps extends ButtonCommonProps {
  icon: IconType;
}

type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  IconButtonProps
>;

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C>,
) => React.ReactElement | null;

const IconButton: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      variant,
      colorScheme,
      className,
      loading,
      icon,
      as,
      ...props
    }: ButtonProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'button';
    const theme = useYogiTheme();
    const buttonStyle = theme.components.IconButton;
    const resolvedVariant = variant || buttonStyle.defaultVariant;

    return (
      <Component
        {...props}
        ref={ref}
        disabled={loading || props.disabled}
        className={twMerge(
          classNames(
            buttonStyle.className,
            resolvedVariant &&
              buttonStyle.variants?.[resolvedVariant]?.(
                colorScheme || buttonStyle.colorScheme || theme.colorScheme,
              ),
            className,
          ),
        )}
      >
        {createElement(icon, { className: 'w-4 h-4' })}
      </Component>
    );
  },
);

export default IconButton;
