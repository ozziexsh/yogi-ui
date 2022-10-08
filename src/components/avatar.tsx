import React from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { useYogiTheme } from '../theme';

interface Props {
  className?: string;
  src?: string;
  name?: string;
  alt?: string;
  colorScheme?: string;
}

export default function Avatar({
  src,
  alt,
  name,
  className,
  colorScheme,
}: Props) {
  const theme = useYogiTheme();
  const mergedClass = twMerge(
    classNames(
      `bg-${colorScheme || theme.colorScheme}-600`,
      'text-white w-12 h-12 rounded-full inline-flex items-center justify-center',
      className,
    ),
  );
  const initials = name
    ?.split(' ')
    .map(part => part[0])
    .join('');

  if (!src) {
    return (
      <div className={mergedClass}>
        {initials ? (
          <p>{initials}</p>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={'h-auto w-2/3 fill-current'}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        )}
      </div>
    );
  }

  return <img src={src} alt={alt} className={mergedClass} />;
}
