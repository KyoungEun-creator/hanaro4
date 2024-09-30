// import { useState } from 'react';
import { useRef } from 'react';
import { Session } from '../App';
import Login from './Login';
import Profile from './Profile';
import { FaTrashCan } from 'react-icons/fa6';
import Button from './atoms/Button';

type Props = {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
  removeCartItem: (itemId: number) => void;
};

export default function My({ session, logout, login, removeCartItem }: Props) {
  const logoutButtonRef = useRef<HTMLButtonElement>(null);
  const removeItem = (id: number) => {
    if (confirm('Are u sure?')) {
      removeCartItem(id);
    }
  };

  return (
    <>
      {session.loginUser ? (
        <>
          <Profile session={session} logout={logout} ref={logoutButtonRef} />
          <Button
            text='My_Logout'
            onClick={() => logoutButtonRef.current?.click()}
            classNames='my-3 rounded border border-black bg-green-700 text-white px-3 py-2'
          />
        </>
      ) : (
        <div className='flex justify-center'>
          <Login login={login} />
        </div>
      )}
      <div className='flex justify-center'>
        <div className='w-1/4 border'>
          <ul>
            {session.cart?.length ? (
              session.cart.map(({ id, name, price }) => {
                return (
                  <li key={id} className='flex justify-between p-3'>
                    <div>
                      {name}{' '}
                      <small className='font-'>
                        ({price.toLocaleString()}원)
                      </small>
                    </div>
                    <button
                      onClick={() => removeItem(id)}
                      className='btn btn-danger px-1 py-0'
                    >
                      <FaTrashCan />
                    </button>
                  </li>
                );
              })
            ) : (
              <li className='text-slate-500'>There is no items.</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
