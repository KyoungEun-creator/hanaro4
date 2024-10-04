import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './hooks/counter-hook';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <App />
      </CounterProvider>
    </BrowserRouter>
  </StrictMode>
);
