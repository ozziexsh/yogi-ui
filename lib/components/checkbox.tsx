import React, { PropsWithChildren, useContext, useId } from 'react';
import { CheckboxGroupContext } from './checkbox-group';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import useYogiTheme from '../hooks/use-yogi-theme';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  colorScheme?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, PropsWithChildren<Props>>(
  ({ children, colorScheme, ...props }, ref) => {
    const checkboxGroup = useContext(CheckboxGroupContext);
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
      colorScheme ||
      checkboxGroup?.colorScheme ||
      theme.components.Checkbox.colorScheme ||
      theme.colorScheme;

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      checkboxGroup?.onChange(e);
      props.onChange?.(e);
    }

    return (
      <label
        htmlFor={id}
        className={twMerge(
          classNames(theme.components.Checkbox.className, props.className),
        )}
      >
        <input
          type="checkbox"
          {...props}
          ref={ref}
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
  },
);

export default Checkbox;
