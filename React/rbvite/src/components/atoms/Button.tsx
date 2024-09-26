import { ButtonHTMLAttributes } from 'react';

type Props = {
  text: string;
  classNames?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ text, classNames = '', ...props }: Props) {
  return (
    <button {...props} className={` ${classNames}`}>
      {text}
    </button>
  );
}
