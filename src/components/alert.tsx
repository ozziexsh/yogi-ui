import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { DivProps } from '../types';

interface Props extends DivProps {
  variant?: 'subtle';
  colorScheme?: string;
}

const variantMap = {
  subtle: (color: string) => `bg-${color}-200`,
};

export default function Alert({
  variant = 'subtle',
  colorScheme = 'blue',
  children,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={twMerge(
        classNames(
          'rounded-md border-4 border-transparent bg-red-200 px-4 py-2 text-gray-700',
          variantMap[variant](colorScheme),
        ),
      )}
    >
      {children}
    </div>
  );
}
