import { ReactNode, useState } from 'react';

type Props = {
  name: string;
  age: number;
  plusCount: () => void;
  minusCount: () => void;
};
type TitleProps = { text: string; name: string };

const Title = ({ text, name }: TitleProps) => {
  return (
    <h1>
      {text} - {name}
    </h1>
  );
};
const Body = ({ children }: { children: ReactNode }) => {
  return (
    <div className='red' style={{ color: 'yellowgreen' }}>
      {children}
    </div>
  );
};

export default function Hello({ name, age, plusCount, minusCount }: Props) {
  const [myState, setMyState] = useState(0);

  return (
    <>
      <div>
        <Title text='Hello' name={name} />

        <Body>
          This is Hello Component - {myState}-{age}
        </Body>
        <button
          onClick={() => {
            setMyState(myState + 1);
            plusCount();
          }}
        >
          Hello
        </button>
        <button onClick={() => minusCount()}>minus</button>
      </div>
    </>
  );
}
