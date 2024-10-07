import { FaTrashCan } from 'react-icons/fa6';
import { useSession, type CartItem } from '../hooks/session-context';
import { FormEvent, MouseEvent, useRef, useState } from 'react';
import Button from './atoms/Button';
import { FaRedo, FaSave } from 'react-icons/fa';

type Props = {
  item: CartItem;
  toggleAdding?: () => void; // add할 때만 전달
};

export default function Item({ item, toggleAdding }: Props) {
  const { id, name, price } = item;
  const { removeCartItem, addCartItem, editCartItem } = useSession();

  const [isEditing, setIsEditing] = useState(!id); // edit, add cart item
  const [hasDirty, setDirty] = useState(false); // something changed

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  // onClick 이벤트 안에서 setIsAdding 직접 사용 지양 위함
  const toggleEditing = (
    e?: FormEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e?.preventDefault();

    // reset 버튼 클릭 시 input value 원래값으로 복귀되도록
    if (hasDirty && nameRef.current && priceRef.current) {
      nameRef.current.value = name;
      priceRef.current.value = String(price);

      checkDirty();
    }

    setTimeout(() => {
      if (toggleAdding) toggleAdding();
      else setIsEditing((pre) => !pre);
    }, 1000);
  };

  const removeItem = (id: number) => {
    if (confirm('Are u sure?')) {
      removeCartItem(id);
    }
  };

  // 수정, 추가
  const saveItem = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
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
    nameRef.current.focus();

    toggleEditing();
  };

  // 수정 여부 확인을 통한 저장버튼 유무
  const checkDirty = () => {
    const currName = nameRef.current?.value;
    const currPrice = Number(priceRef.current?.value);
    setDirty(name !== currName || price !== currPrice);
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={saveItem} className='my-2 flex justify-between'>
          <input
            type='text'
            ref={nameRef}
            onChange={checkDirty}
            defaultValue={name}
            placeholder='name'
            className='border px-3'
          />
          <input
            type='number'
            ref={priceRef}
            onChange={(e) => setDirty(price !== +e.currentTarget.value)}
            defaultValue={price}
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
          {hasDirty && (
            <Button
              type='submit'
              classNames='border bg-green-200 px-3 py-2 rounded'
            >
              <FaSave />
            </Button>
          )}
        </form>
      ) : (
        <a
          href='#'
          key={id}
          onClick={() => toggleEditing()}
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
