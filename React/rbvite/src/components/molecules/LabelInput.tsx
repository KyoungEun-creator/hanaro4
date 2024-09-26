import { ChangeEvent, InputHTMLAttributes, useId } from 'react';

type Props = {
  label: string;
  type?: string;
  placehoder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  classNames?: string;
  inputAttrs?: InputHTMLAttributes<HTMLInputElement>;
};

export default function LabelInput({
  label,
  inputAttrs,
  type = 'text',
  placehoder = `${label}...`,
  onChange = () => {},
  classNames = '',
}: Props) {
  const id = useId();

  return (
    <>
      <label htmlFor={label === 'id' ? id : label} className='font-bold'>
        {label}
      </label>
      <input
        className={classNames}
        type={type}
        id={label}
        placeholder={placehoder}
        onChange={onChange}
        {...inputAttrs}
      />
    </>
  );
}
