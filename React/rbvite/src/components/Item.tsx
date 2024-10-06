import { FaTrashCan } from 'react-icons/fa6';
import { useSession, type CartItem } from '../hooks/session-context';
import { FormEvent, useRef, useState } from 'react';
import Button from './atoms/Button';
import { FaRedo, FaSave } from 'react-icons/fa';

type Props = {
  item: CartItem;
  toggleAdding?: () => void;
};

export default function Item({ item, toggleAdding }: Props) {
  const { id, name, price } = item;
  const { removeCartItem, addCartItem, editCartItem } = useSession();

  const [isEditing, setIsEditing] = useState(!id); // edit, add cart item
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  // onClick 이벤트 안에서 setIsAdding 직접 사용 지양 위함
  const toggleEditing = () => {
    if (toggleAdding) toggleAdding();
    else setIsEditing((pre) => !pre);
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

    if (id === 0) {
      addCartItem(name, Number(price));
    } else {
      editCartItem({ id, name, price: +price });
    }
    nameRef.current.value = '';
    priceRef.current.value = '';

    toggleEditing();
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={saveItem} className='my-2 flex justify-between'>
          <input
            type='text'
            ref={nameRef}
            placeholder='name'
            defaultValue={name}
            className='border px-3'
          />
          <input
            type='number'
            ref={priceRef}
            placeholder='price'
            defaultValue={price}
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
        <a
          href='#'
          key={id}
          onClick={toggleEditing}
          className='group flex justify-between p-3 hover:bg-gray-100'
        >
          <strong className='group-hover:text-blue-500'>
            {`[${id}]`} {name}{' '}
            <small className='font-light'>({price.toLocaleString()}원)</small>
          </strong>
          <button
            onClick={() => removeItem(id)}
            className='btn btn-danger px-1 py-0'
          >
            <FaTrashCan />
          </button>
        </a>
      )}
    </>
  );
}
