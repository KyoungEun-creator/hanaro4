import { useRef, useState } from 'react';
import './App.css';
import My from './components/My';
import Hello, { MyHandler } from './components/Hello';
import { flushSync } from 'react-dom';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

type LoginUser = typeof SampleSession.loginUser;
type CartItem = { id: number; name: string; price: number };
export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

export default function App() {
  const [session, setSession] = useState<Session>(SampleSession);
  const [count, setCount] = useState(0);

  // useImperativeHandle 사용 -> Hello컴포넌트에 전달
  const myHandleRef = useRef<MyHandler>(null);

  const plusCount = () => {
    setCount((pre) => {
      const newer = pre + 1;
      return newer;
    });
    flushSync(() => setCount((c) => c + 1));
  };
  const minusCount = () => setCount(count - 1);

  const logout = () => setSession({ ...session, loginUser: null });

  const login = (id: number, name: string) => {
    setSession({ ...session, loginUser: { id, name } });
  };

  const removeCartItem = (toRemoveId: number) => {
    setSession({
      ...session,
      cart: session.cart.filter(({ id }) => id !== toRemoveId),
    });
  };

  return (
    <>
      <Hello
        name='홍길동'
        age={20}
        plusCount={plusCount}
        minusCount={minusCount}
        ref={myHandleRef}
      />
      <pre>{JSON.stringify(session.loginUser)}</pre>

      <My
        session={session}
        logout={logout}
        login={login}
        removeCartItem={removeCartItem}
      />

      <div className='card'>
        <button
          onClick={() => {
            myHandleRef.current?.jumpHelloState();
          }}
          className='mt-4 rounded bg-slate-400 px-3 py-2 text-white'
        >
          App.count is {count}
        </button>
      </div>
    </>
  );
}
