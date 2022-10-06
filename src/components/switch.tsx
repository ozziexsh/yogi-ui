import { Switch as HSwitch } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface Props {
  checked?: boolean;
  onChange(checked: boolean): void;
  name?: string;
  value?: string;
  colorScheme?: string;
}

export function SwitchGroup({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <HSwitch.Group
      as={'div'}
      className={twMerge(
        classNames('inline-flex items-center space-x-2', className),
      )}
    >
      {children}
    </HSwitch.Group>
  );
}

export function SwitchLabel({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <HSwitch.Label
      className={twMerge(
        classNames('text-sm font-medium text-gray-700', className),
      )}
    >
      {children}
    </HSwitch.Label>
  );
}

export default function Switch({
  colorScheme = 'blue',
  checked,
  onChange,
  name,
  value,
  children,
}: PropsWithChildren<Props>) {
  const switchComponent = (
    <HSwitch
      checked={checked}
      onChange={onChange}
      className={classNames(
        checked ? `bg-${colorScheme}-600` : 'bg-gray-200',
        'relative inline-flex h-6 w-11 items-center rounded-full',
      )}
      name={name}
      value={value}
    >
      <span
        className={classNames(
          checked ? 'translate-x-6' : 'translate-x-1',
          'inline-block h-4 w-4 transform rounded-full bg-white transition',
        )}
      />
    </HSwitch>
  );

  if (!children) {
    return switchComponent;
  }

  return (
    <SwitchGroup>
      {switchComponent}

      <SwitchLabel>{children}</SwitchLabel>
    </SwitchGroup>
  );
}
