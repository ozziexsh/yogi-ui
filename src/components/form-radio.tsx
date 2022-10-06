import React, { PropsWithChildren, useContext, useId } from 'react';
import { FormRadioGroupContext } from './form-radio-group';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export default function FormRadio({
  children,
  ...props
}: PropsWithChildren<Props>) {
  const radioGroup = useContext(FormRadioGroupContext);
  const fallbackId = useId();
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

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    radioGroup?.onChange(e);
    props.onChange?.(e);
  }

  return (
    <label htmlFor={id} className={'inline-flex items-center space-x-2'}>
      <input
        type="radio"
        {...props}
        id={id}
        checked={isChecked}
        onChange={onChange}
      />

      <span>{children}</span>
    </label>
  );
}
