import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { DivProps, IconType } from '../types';
import CheckCircleIcon from '../icons/check-circle-icon';
import InformationCircleIcon from '../icons/information-circle-icon';
import ExclamationCircleIcon from '../icons/exclamation-circle-icon';
import XCircleIcon from '../icons/x-circle-icon';
import { createElement } from 'react';
import useYogiTheme from '../hooks/use-yogi-theme';

interface Props extends DivProps {
  variant?: 'subtle' | string;
  status?: 'success' | 'info' | 'warning' | 'error';
  colorScheme?: string;
  icon?: IconType;
}

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
  variant,
  colorScheme,
  status,
  icon,
  children,
  ...props
}: Props) {
  const theme = useYogiTheme();
  const statusIcon = icon ? icon : status ? statusIconMap[status] : null;
  const alertStyle = theme.components.alert;
  const resolvedColorScheme = status
    ? statusColorMap[status]
    : colorScheme || theme.colorScheme;
  const resolvedVariant = variant || alertStyle.defaultVariant;

  return (
    <div
      {...props}
      className={twMerge(
        classNames(
          alertStyle.className,
          alertStyle.variants[resolvedVariant](resolvedColorScheme),
        ),
      )}
    >
      {statusIcon &&
        createElement(statusIcon, { className: 'w-6 h-6 flex-shrink-0' })}
      <span>{children}</span>
    </div>
  );
}
