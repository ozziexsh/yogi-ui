import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import React, { createElement } from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const levelMap = {
  1: 'text-6xl',
  2: 'text-5xl',
  3: 'text-4xl',
  4: 'text-3xl',
  5: 'text-2xl',
  6: 'text-xl',
};

export default function Heading({
  level = 1,
  className,
  children,
  ...props
}: Props) {
  const tag = `h${level}`;

  return createElement(
    tag,
    {
      ...props,
      className: twMerge(
        classNames('font-semibold', levelMap[level], className),
      ),
    },
    children,
  );
}
