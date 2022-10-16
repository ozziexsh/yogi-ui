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
  const badgeStyle = theme.components.Badge;
  const resolvedVariant = variant || badgeStyle.variant;

  return (
    <span
      {...props}
      className={twMerge(
        classNames(
          badgeStyle.className,
          resolvedVariant &&
            badgeStyle.variants?.[resolvedVariant]?.(
              colorScheme || badgeStyle.colorScheme || theme.colorScheme,
            ),
          props.className,
        ),
      )}
    >
      {children}
    </span>
  );
}
