import { Switch as HSwitch } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface Props {
  checked?: boolean;
  onChange(checked: boolean): void;
  name?: string;
  value?: string;
  colorScheme?: string;
}

export default function Switch({
  colorScheme = 'blue',
  checked,
  onChange,
  name,
  value,
  children,
}: PropsWithChildren<Props>) {
  return (
    <HSwitch.Group as={'div'} className={'inline-flex items-center space-x-2'}>
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
          className={`${
            checked ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </HSwitch>
      <HSwitch.Label>{children}</HSwitch.Label>
    </HSwitch.Group>
  );
}
