import { useId, type ComponentProps } from 'react';

function FormInput({
  label,
  ...restProps
}: ComponentProps<'input'> & {
  label: string;
}) {
  const inputId = useId();

  return (
    <div className="formControl">
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} {...restProps} />
    </div>
  );
}

export default FormInput;

export type FormInputProps = ComponentProps<typeof FormInput>;
