import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { flushSync } from 'react-dom';

type TCounterContext = {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

const CounterContext = createContext<TCounterContext>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    flushSync(() => setCount((c) => c + 1));
  };
  const minusCount = () => setCount((count) => count - 1);

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = () => useContext(CounterContext);