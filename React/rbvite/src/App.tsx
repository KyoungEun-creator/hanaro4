import { useState } from 'react';
import './App.css';
import My from './components/My';

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

  const logout = () => setSession({ ...session, loginUser: null });

  const login = (id: number, name: string) => {
    setSession({ ...session, loginUser: { id, name } });
  };

  return (
    <>
      <pre>{JSON.stringify(session.loginUser)}</pre>
      <h1>[ 장바구니 ]</h1>
      <My session={session} logout={logout} login={login} />
    </>
  );
}
