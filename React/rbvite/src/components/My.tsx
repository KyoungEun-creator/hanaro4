import { useRef, useState } from 'react';
import Profile from './Profile';
import { FaPlus } from 'react-icons/fa6';
import Button from './atoms/Button';
import clsx from 'clsx';
import Login from './Login';
import { useSession } from '../hooks/session-context';
import Item from './Item';

export default function My() {
  const { session } = useSession(); // useContext
  const [isAdding, setIsAdding] = useState(false); // add cart item
  const logoutButtonRef = useRef<HTMLButtonElement>(null);

  // onClick 이벤트 안에서 setIsAdding 직접 사용 지양 위함
  const toggleAdding = () => {
    setIsAdding((pre) => !pre);
  };

  return (
    <>
      <pre>{JSON.stringify(session.loginUser)}</pre>
      <div
        className={clsx(
          'my-3',
          !session.loginUser && 'border-4 border-green-900'
        )}
      >
        {session.loginUser ? (
          <div className='flex flex-col items-center'>
            <Profile ref={logoutButtonRef} />
            <Button
              onClick={() => logoutButtonRef.current?.click()}
              classNames='my-3 rounded border border-black bg-green-700 text-white px-3 py-2'
            >
              My_Logout
            </Button>
          </div>
        ) : (
          <div className='flex justify-center'>
            <Login />
          </div>
        )}
      </div>

      <div className='flex flex-col items-center'>
        <h1>[ 장바구니 ]</h1>

        <div className='my-2 w-1/2 border p-4'>
          <ul>
            {session.cart?.length ? (
              session.cart.map((item) => {
                return (
                  <li key={item.id}>
                    <Item item={item} />{' '}
                    {/* 수정,삭제 기능만 => toggleAdding 불필요 */}
                  </li>
                );
              })
            ) : (
              <li className='text-slate-500'>There is no items.</li>
            )}
            <li>
              {isAdding ? (
                // 추가,취소
                <Item
                  item={{ id: 0, name: '', price: 0 }} // 초기값 세팅
                  toggleAdding={toggleAdding}
                />
              ) : (
                <div className='flex justify-center'>
                  <Button
                    onClick={toggleAdding}
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
