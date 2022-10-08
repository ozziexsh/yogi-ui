import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import React from 'react';
import useYogiTheme from '../hooks/use-yogi-theme';

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

function Spinner({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={twMerge(classNames('animate-spin', props.className))}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

export default function Button({
  variant,
  colorScheme,
  className,
  loading,
  children,
  leftIcon,
  rightIcon,
  ...props
}: Props) {
  const theme = useYogiTheme();
  const loadOnRight = !!rightIcon;
  const buttonStyle = theme.components.button;
  const resolvedVariant = variant || buttonStyle.defaultVariant;
  const variantClassName = buttonStyle.variants[resolvedVariant](
    colorScheme || theme.colorScheme,
  );

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={twMerge(
        classNames(buttonStyle.className, variantClassName, className),
      )}
    >
      {loading && !loadOnRight ? <Spinner className={'h-3 w-3'} /> : leftIcon}
      <span>{children}</span>
      {loading && loadOnRight ? <Spinner className={'h-3 w-3'} /> : rightIcon}
    </button>
  );
}
