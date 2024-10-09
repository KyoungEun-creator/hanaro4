/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useContext, useState } from 'react';
// import { flushSync } from 'react-dom';

const CounterContextInitValue = {
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
};

type TCounterContext = typeof CounterContextInitValue;

const CounterContext = createContext<TCounterContext>(CounterContextInitValue);

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount((preCount) => preCount + 1);
    // flushSync(() => setCount((c) => c + 1));
  };
  const minusCount = () => setCount((preCount) => preCount - 1);

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// useContext
export const useCounter = () => useContext(CounterContext);

// Custom Hook
export const useCount = (defaultValue: number = 0) => {
  const [count, setCount] = useState(defaultValue);

  const plusCount = (flag = 1) => setCount((pre) => pre + flag);

  return [count, plusCount];
};
