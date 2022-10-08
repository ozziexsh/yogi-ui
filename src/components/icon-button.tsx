import { IconType } from '../types';
import useYogiTheme from '../hooks/use-yogi-theme';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import React, { createElement } from 'react';
import { ButtonCommonProps } from './button';

interface IconButtonProps extends ButtonCommonProps {
  icon: IconType;
}

export default function IconButton({
  variant,
  colorScheme,
  className,
  loading,
  icon,
  ...props
}: IconButtonProps) {
  const theme = useYogiTheme();
  const buttonStyle = theme.components.iconButton;
  const resolvedVariant = variant || buttonStyle.defaultVariant;

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={twMerge(
        classNames(
          buttonStyle.className,
          buttonStyle.variants[resolvedVariant](
            colorScheme || theme.colorScheme,
          ),
          className,
        ),
      )}
    >
      {createElement(icon, { className: 'w-4 h-4' })}
    </button>
  );
}
