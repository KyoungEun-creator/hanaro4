import { useRef, useState } from 'react';
import './App.css';
import My from './components/My';
import Hello, { MyHandler } from './components/Hello';
import { type LoginHandler } from './components/Login';
import { CounterProvider } from './hooks/counter-hook';

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

  // useImperativeHandle 사용 -> Hello컴포넌트에 전달
  const myHandleRef = useRef<MyHandler>(null);

  const logout = () => setSession({ ...session, loginUser: null });

  // useImperativeHandle 사용 -> My컴포넌트 -> Login컴포넌트에 전달
  // login validation check
  const loginRef = useRef<LoginHandler>(null);
  const login = (id: number, name: string) => {
    if (!id) {
      alert('ID를 입력하세요');
      return loginRef.current?.focus('id');
    }
    if (!name) {
      alert('Name을 입력하세요');
      return loginRef.current?.focus('name');
    }
    setSession({ ...session, loginUser: { id, name } });
  };

  const removeCartItem = (toRemoveId: number) => {
    setSession({
      ...session,
      cart: session.cart.filter(({ id }) => id !== toRemoveId),
    });
  };

  const addCartItem = (name: string, price: number) => {
    const id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
    setSession({
      ...session,
      cart: [...session.cart, { id, name, price }],
    });
  };

  return (
    <>
      <CounterProvider>
        <Hello name='홍길동' age={20} ref={myHandleRef} />
      </CounterProvider>
      <pre>{JSON.stringify(session.loginUser)}</pre>

      <My
        session={session}
        logout={logout}
        login={login}
        removeCartItem={removeCartItem}
        addCartItem={addCartItem}
        ref={loginRef}
      />
    </>
  );
}
