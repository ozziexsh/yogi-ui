import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import useYogiTheme from '../hooks/use-yogi-theme';

interface Props {
  className?: string;
  src?: string;
  name?: string;
  alt?: string;
  colorScheme?: string;
  size?: string;
}

export default function Avatar({
  src,
  alt,
  name,
  className,
  colorScheme,
  size,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const theme = useYogiTheme();
  const avatarStyle = theme.components.Avatar;
  const resolvedSize = size || avatarStyle.size;
  const sizeClass = resolvedSize && avatarStyle.sizes?.[resolvedSize]?.();
  const mergedClass = twMerge(
    classNames(
      theme.components.Avatar.className,
      `bg-${colorScheme || avatarStyle.colorScheme || theme.colorScheme}-600`,
      sizeClass,
      className,
    ),
  );
  const initials = name
    ?.split(' ')
    .map(part => part[0])
    .join('');

  useEffect(() => {
    setLoaded(false);
    const image = new Image();
    image.onload = () => setLoaded(true);
    if (src) {
      image.src = src;
    }
  }, [src]);

  if (!src || !loaded) {
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
