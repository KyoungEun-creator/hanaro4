import { FormEvent, useRef, useState } from 'react';
import { Session } from '../App';
import Profile from './Profile';
import { FaPlus, FaTrashCan } from 'react-icons/fa6';
import Button from './atoms/Button';
import clsx from 'clsx';
import Login from './Login';
import { FaRedo, FaSave } from 'react-icons/fa';

type Props = {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
  removeCartItem: (itemId: number) => void;
  addCartItem: (name: string, price: number) => void;
};

export default function My({
  session,
  logout,
  login,
  removeCartItem,
  addCartItem,
}: Props) {
  const [isEditing, setIsEditing] = useState(false); // add cart item
  const logoutButtonRef = useRef<HTMLButtonElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  // onClick 이벤트 안에서 setIsEditing 직접 사용 지양
  const toggleEditing = () => {
    setIsEditing((pre) => !pre);
  };

  const removeItem = (id: number) => {
    if (confirm('Are u sure?')) {
      removeCartItem(id);
    }
  };

  // 수정, 추가
  const saveItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;
    if (!name) {
      alert('상품명을 입력하세요');
      return nameRef.current?.focus();
    } else if (!price) {
      alert('가격을 입력하세요');
      return priceRef.current?.focus();
    }
    addCartItem(name, Number(price));
    nameRef.current.value = '';
    priceRef.current.value = '';
  };

  return (
    <>
      <div
        className={clsx(
          'my-5',
          !session.loginUser && 'border-8 border-green-900'
        )}
      >
        {session.loginUser ? (
          <div className='flex flex-col items-center'>
            <Profile session={session} logout={logout} ref={logoutButtonRef} />
            <Button
              onClick={() => logoutButtonRef.current?.click()}
              classNames='my-3 rounded border border-black bg-green-700 text-white px-3 py-2'
            >
              My_Logout
            </Button>
          </div>
        ) : (
          <div className='flex justify-center'>
            <Login login={login} />
          </div>
        )}
      </div>

      <div className='flex flex-col items-center'>
        <h1>[ 장바구니 ]</h1>

        <div className='my-2 w-1/2 border p-4'>
          <ul>
            {session.cart?.length ? (
              session.cart.map(({ id, name, price }) => {
                return (
                  <li key={id} className='flex justify-between p-3'>
                    <strong>
                      {`[${id}]`} {name}{' '}
                      <small className='font-'>
                        ({price.toLocaleString()}원)
                      </small>
                    </strong>
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
            <li>
              {isEditing ? (
                <form onSubmit={saveItem} className='my-2 flex justify-between'>
                  <input
                    type='text'
                    ref={nameRef}
                    placeholder='name'
                    className='border px-3'
                  />
                  <input
                    type='number'
                    ref={priceRef}
                    placeholder='price'
                    className='border px-3'
                  />
                  <Button
                    type='reset'
                    onClick={toggleEditing}
                    classNames='border bg-red-200 px-3 py-2 rounded'
                  >
                    <FaRedo />
                  </Button>
                  <Button
                    type='submit'
                    classNames='border bg-green-200 px-3 py-2 rounded'
                  >
                    <FaSave />
                  </Button>
                </form>
              ) : (
                <div className='flex justify-center'>
                  <Button
                    onClick={toggleEditing}
                    classNames='border-2 border-slate-400 px-3 py-2 rounded flex justify-center'
                  >
                    <FaPlus /> Add Item
                  </Button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
