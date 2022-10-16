import React, { PropsWithChildren, useContext, useId } from 'react';
import { RadioGroupContext } from './radio-group';
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

const Radio = React.forwardRef<HTMLInputElement, PropsWithChildren<Props>>(
  ({ children, colorScheme, ...props }, ref) => {
    const radioGroup = useContext(RadioGroupContext);
    const fallbackId = useId();
    const theme = useYogiTheme();
    const id = props.id || fallbackId;
    const isChecked = (() => {
      if (typeof props.checked !== 'undefined') {
        return props.checked;
      }
      if (!radioGroup?.value) {
        return undefined;
      }
      return radioGroup.value === props.value;
    })();
    const resolvedColorScheme =
      colorScheme ||
      radioGroup?.colorScheme ||
      theme.components.Radio.colorScheme ||
      theme.colorScheme;

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      radioGroup?.onChange(e);
      props.onChange?.(e);
    }

    return (
      <label
        htmlFor={id}
        className={twMerge(
          classNames(theme.components.Radio.className, props.className),
        )}
      >
        <input
          type="radio"
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

export default Radio;
