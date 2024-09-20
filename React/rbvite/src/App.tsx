import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';

function App() {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Hello name='Jade' age={24} plusCount={plusCount} />
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          App: count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
