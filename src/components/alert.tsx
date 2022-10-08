import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { DivProps, IconType } from '../types';
import CheckCircleIcon from '../icons/check-circle-icon';
import InformationCircleIcon from '../icons/information-circle-icon';
import ExclamationCircleIcon from '../icons/exclamation-circle-icon';
import XCircleIcon from '../icons/x-circle-icon';
import { createElement } from 'react';
import colors from 'tailwindcss/colors';
import { useYogiTheme } from '../theme';

interface Props extends DivProps {
  variant?: 'subtle';
  status?: 'success' | 'info' | 'warning' | 'error';
  colorScheme?: string;
  icon?: IconType;
}

const variantMap = {
  subtle: (color: string) => `bg-${color}-200 text-${color}-700`,
};

const statusIconMap: { [key: string]: IconType } = {
  success: CheckCircleIcon,
  info: InformationCircleIcon,
  warning: ExclamationCircleIcon,
  error: XCircleIcon,
};

const statusColorMap: { [key: string]: string } = {
  success: 'green',
  info: 'blue',
  warning: 'yellow',
  error: 'red',
};

export default function Alert({
  variant = 'subtle',
  colorScheme,
  status,
  icon,
  children,
  ...props
}: Props) {
  const theme = useYogiTheme();
  const statusIcon = icon ? icon : status ? statusIconMap[status] : null;
  const resolvedColorScheme = status
    ? statusColorMap[status]
    : colorScheme
    ? colorScheme
    : theme.colorScheme;

  return (
    <div
      {...props}
      className={twMerge(
        classNames(
          'flex items-start space-x-2 rounded-md border-4 border-transparent bg-red-200 px-4 py-2 text-gray-700',
          variantMap[variant](resolvedColorScheme),
        ),
      )}
    >
      {statusIcon &&
        createElement(statusIcon, { className: 'w-6 h-6 flex-shrink-0' })}
      <span>{children}</span>
    </div>
  );
}
