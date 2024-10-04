import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = {
  classNames?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  classNames = '',
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button {...props} className={` ${classNames} flex items-center`}>
      {children}
    </button>
  );
}
