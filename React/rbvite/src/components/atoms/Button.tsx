type Props = {
  text: string;
  classNames?: string;
};

export default function Button({ text, classNames = '' }: Props) {
  return <button className={` ${classNames}`}>{text}</button>;
}
