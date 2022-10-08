import React, { PropsWithChildren, useContext, useId } from 'react';
import { FormCheckboxGroupContext } from './form-checkbox-group';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { useYogiTheme } from '../theme';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  colorScheme?: string;
}

export default function FormCheckbox({
  children,
  colorScheme,
  ...props
}: PropsWithChildren<Props>) {
  const checkboxGroup = useContext(FormCheckboxGroupContext);
  const fallbackId = useId();
  const theme = useYogiTheme();
  const id = props.id || fallbackId;
  const isChecked = (() => {
    if (typeof props.checked !== 'undefined') {
      return props.checked;
    }
    if (!checkboxGroup?.value || !props.value) {
      return undefined;
    }
    return checkboxGroup.value.includes(String(props.value));
  })();
  const resolvedColorScheme =
    colorScheme || checkboxGroup?.colorScheme || theme.colorScheme;

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    checkboxGroup?.onChange(e);
    props.onChange?.(e);
  }

  return (
    <label
      htmlFor={id}
      className={twMerge(
        classNames('inline-flex items-center space-x-2', theme.formLabel),
      )}
    >
      <input
        type="checkbox"
        {...props}
        id={id}
        checked={isChecked}
        onChange={onChange}
        className={twMerge(
          classNames(
            resolvedColorScheme ? `text-${resolvedColorScheme}-600` : null,
            props.className,
          ),
        )}
      />

      <span>{children}</span>
    </label>
  );
}
