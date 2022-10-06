import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  colorScheme?: 'gray' | 'blue';
  loading?: boolean;
}

const variantMap = {
  default: 'bg-gray-200 hover:bg-gray-300',
  outline: 'border-gray-200 hover:bg-gray-100',
  ghost: 'hover:bg-gray-100',
  link: 'p-0 hover:underline',
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

export default function Button({
  variant = 'default',
  className,
  loading,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={twMerge(
        classNames(
          'flex items-center space-x-2 rounded-md border-2 border-transparent px-4 py-2',
          variantMap[variant],
          'disabled:cursor-not-allowed disabled:opacity-75',
          className,
        ),
      )}
    >
      {loading ? <Spinner className={'h-3 w-3'} /> : null}
      <span>{children}</span>
    </button>
  );
}
