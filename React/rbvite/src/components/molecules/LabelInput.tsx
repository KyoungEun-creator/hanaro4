import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useId,
} from 'react';

type Props = {
  label: string;
  type?: string;
  placehoder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  classNames?: string;
  inputAttrs?: InputHTMLAttributes<HTMLInputElement>;
};

function LabelInput(
  {
    label,
    inputAttrs,
    type = 'text',
    placehoder = `${label}...`,
    onChange = () => {},
    classNames = '',
  }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
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
        ref={ref}
        {...inputAttrs}
      />
    </>
  );
}
const LabelInputRef = forwardRef(LabelInput);

export default LabelInputRef;
