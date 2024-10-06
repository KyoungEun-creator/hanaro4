import {
  useRef,
  useState,
  createContext,
  PropsWithChildren,
  useContext,
  createRef,
} from 'react';
import { LoginHandler } from '../components/Login';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
  dirtyAttributes: { name: { before: '', curr: '' } },
};

type LoginUser = typeof SampleSession.loginUser;
export type CartItem = { id: number; name: string; price: number };
export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

const SessionContextInitValue = {
  session: SampleSession,
  logout: () => {},
  login: (id: number, name: string) => console.log(id, name),
  removeCartItem: (itemId: number) => console.log(itemId),
  addCartItem: (name: string, price: number) => console.log(name, price),
  loginRef: createRef<LoginHandler>(),
};

type TSessionContext = Omit<typeof SessionContextInitValue, 'session'> & {
  session: Session;
};

const SessionContext = createContext<TSessionContext>(SessionContextInitValue);

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(SampleSession);
  const loginRef = useRef<LoginHandler>(null); // useImperativeHandle 사용 -> (My컴포넌트) -> Login컴포넌트에 전달

  const logout = () => setSession({ ...session, loginUser: null });

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

  // const editItem = (id: number, before: string, curr: string) => {
  //   setSession({
  //     ...session,
  //   });
  // };

  return (
    <SessionContext.Provider
      value={{
        session,
        logout,
        login,
        removeCartItem,
        addCartItem,
        loginRef,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext);
