import {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useState,
} from 'react';
import { useCounter } from '../hooks/counter-hook';

type Props = {
  name: string;
  age: number;
};
type TitleProps = { text: string; name: string; age: number };

const Title = ({ text, name, age }: TitleProps) => {
  return (
    <h1>
      {text} - {name} - {age}
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

export type MyHandler = {
  jumpHelloState: () => void;
};

function Hello({ name, age }: Props, ref: ForwardedRef<MyHandler>) {
  // useContext를 통해 만든 useCounter가 전달해준 value인 plusCount, minusCount 사용
  const { count, plusCount, minusCount } = useCounter();

  const [myState, setMyState] = useState(0);
  const handler: MyHandler = {
    jumpHelloState: () => setMyState((pre) => pre * 10),
  };
  useImperativeHandle(ref, () => handler);

  return (
    <>
      <div>
        <Title text='Hello' name={name} age={age} />

        <Body>
          This is Hello Component - (count: {count}) - (myState: {myState})
        </Body>
        <button
          onClick={() => {
            plusCount();
          }}
          className='mx-3 my-5 rounded bg-green-200 px-3 py-2'
        >
          HelloPlusCountBtn
        </button>
        <button
          className='my-5 rounded bg-green-200 px-3 py-2'
          onClick={minusCount}
        >
          HelloMinusCountBtn
        </button>
        <button
          onClick={() => {
            setMyState(myState + 1);
          }}
          className='mx-3 my-5 rounded bg-green-200 px-3 py-2'
        >
          HelloPlusStateBtn
        </button>
      </div>
    </>
  );
}

const ImpHello = forwardRef(Hello);
export default ImpHello;
