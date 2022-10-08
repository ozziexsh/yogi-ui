import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import React, { createElement } from 'react';
import { IconType } from '../types';
import { useYogiTheme } from '../theme';

interface CommonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'solid' | 'subtle' | 'outline' | 'ghost' | 'link';
  colorScheme?: string;
  loading?: boolean;
}

interface Props extends CommonProps {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const variantMap = {
  solid: (color: string) =>
    `bg-${color}-600 hover:bg-${color}-500 text-white shadow-sm`,
  subtle: (color: string) =>
    `bg-${color}-100 hover:bg-${color}-200 text-${color}-700`,
  outline: (color: string) =>
    `border-${color}-700 hover:bg-${color}-100 text-${color}-700`,
  ghost: (color: string) => `hover:bg-${color}-100 text-${color}-700`,
  link: (color: string) => `p-0 hover:underline text-${color}-700`,
};

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

interface IconButtonProps extends CommonProps {
  icon: IconType;
}

export function IconButton({
  variant = 'solid',
  colorScheme,
  className,
  loading,
  icon,
  ...props
}: IconButtonProps) {
  const theme = useYogiTheme();

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={twMerge(
        classNames(
          'rounded-md border-2 border-transparent p-2 leading-4',
          variantMap[variant](colorScheme || theme.colorScheme),
          'disabled:cursor-not-allowed disabled:opacity-75',
          className,
        ),
      )}
    >
      {createElement(icon, { className: 'w-4 h-4' })}
    </button>
  );
}

export default function Button({
  variant = 'solid',
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

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={twMerge(
        classNames(
          'flex items-center space-x-2 rounded-md border-2 border-transparent px-3 py-2 text-sm font-medium leading-4',
          variantMap[variant](colorScheme || theme.colorScheme),
          'disabled:cursor-not-allowed disabled:opacity-75',
          className,
        ),
      )}
    >
      {loading && !loadOnRight ? <Spinner className={'h-3 w-3'} /> : leftIcon}
      <span>{children}</span>
      {loading && loadOnRight ? <Spinner className={'h-3 w-3'} /> : rightIcon}
    </button>
  );
}
