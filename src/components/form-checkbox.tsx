import React, { PropsWithChildren, useContext, useId } from 'react';
import { FormCheckboxGroupContext } from './form-checkbox-group';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export default function FormCheckbox({
  children,
  ...props
}: PropsWithChildren<Props>) {
  const checkboxGroup = useContext(FormCheckboxGroupContext);
  const fallbackId = useId();
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

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    checkboxGroup?.onChange(e);
    props.onChange?.(e);
  }

  return (
    <label
      htmlFor={id}
      className={
        'inline-flex items-center space-x-2 text-sm font-medium text-gray-700'
      }
    >
      <input
        type="checkbox"
        {...props}
        id={id}
        checked={isChecked}
        onChange={onChange}
      />

      <span>{children}</span>
    </label>
  );
}
