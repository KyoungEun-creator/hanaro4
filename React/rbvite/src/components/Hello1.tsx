import { ReactNode, useState } from 'react';

type TitleProps = { text: string; name: string };

const Title = ({ text, name }: TitleProps) => {
  return (
    <h1>
      {text} - {name}
    </h1>
  );
};
const Body = ({ children }: { children: ReactNode }) => {
  console.log('---------- this is body!!');
  return (
    <div className='red' style={{ color: 'yellowgreen' }}>
      {children}
    </div>
  );
};

export default function Hello() {
  const [myState, setMyState] = useState(0); // 상태
  let v = 1; // 변수
  console.log('***********', v, myState);

  return (
    <>
      <Title text='Hello' name='React' />
      <Body>
        This is Hello Component {v} - {myState}
      </Body>
      <button
        onClick={(e) => {
          e.preventDefault();
          v++;
          setMyState(myState + 1);
          console.log('🚀   v/myState:', v, myState);
        }}
      >
        Click Me!
      </button>
    </>
  );
}
