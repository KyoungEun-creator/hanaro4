import { useRef } from 'react';
import './App.css';
import My from './components/My';
import Hello, { MyHandler } from './components/Hello';
import { CounterProvider } from './hooks/counter-hook';

export default function App() {
  // useImperativeHandle 사용 -> Hello컴포넌트에 전달
  const myHandleRef = useRef<MyHandler>(null);

  return (
    <>
      <CounterProvider>
        <Hello age={20} ref={myHandleRef} />
      </CounterProvider>
      <My />
    </>
  );
}
