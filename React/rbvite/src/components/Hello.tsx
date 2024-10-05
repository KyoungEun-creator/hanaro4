import {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useState,
} from 'react';
import { useCounter } from '../hooks/counter-hook';
import { useSession } from '../hooks/session-context';

type Props = {
  age: number;
};
type TitleProps = { text: string; name?: string; age: number };

const Title = ({ text, name = 'unknown', age }: TitleProps) => {
  return (
    <h1>
      {text} - (name: {name}) - (age: {age})
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

function Hello({ age }: Props, ref: ForwardedRef<MyHandler>) {
  const { count, plusCount, minusCount } = useCounter(); // useContext
  const {
    session: { loginUser },
  } = useSession(); // useContext

  const [myState, setMyState] = useState(0);
  const handler: MyHandler = {
    jumpHelloState: () => setMyState((pre) => pre * 10),
  };
  useImperativeHandle(ref, () => handler);

  return (
    <>
      <div>
        <Title text='Hello' name={loginUser?.name} age={age} />

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
