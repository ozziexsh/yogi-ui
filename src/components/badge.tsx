import React from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import useYogiTheme from '../hooks/use-yogi-theme';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  variant?: 'solid' | 'outline' | 'subtle' | string;
  colorScheme?: string;
}

export default function Badge({
  children,
  variant,
  colorScheme,
  ...props
}: Props) {
  const theme = useYogiTheme();
  const badgeStyle = theme.components.badge;
  const resolvedVariant = variant || badgeStyle.defaultVariant;

  return (
    <span
      {...props}
      className={twMerge(
        classNames(
          badgeStyle.className,
          badgeStyle.variants[resolvedVariant](
            colorScheme || theme.colorScheme,
          ),
          props.className,
        ),
      )}
    >
      {children}
    </span>
  );
}
