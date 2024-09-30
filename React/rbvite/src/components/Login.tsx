import { FormEvent, useRef } from 'react';
import LabelInput from './molecules/LabelInput';
import Button from './atoms/Button';

export default function Login({
  login,
}: {
  login: (id: number, name: string) => void;
}) {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idRef.current?.value;
    const name = nameRef.current?.value;

    if (!id) {
      alert('id needed!');
      return;
    } else if (!name) {
      alert('name needed!');
      return;
    }

    login(+id, name);
  };

  return (
    <>
      <div className='flex w-1/2 flex-col items-center border p-5'>
        <h1 className='text-5xl font-bold'>Sign In</h1>
        <form onSubmit={signIn} className='mt-3 flex flex-col justify-between'>
          <div className='flex'>
            <div className='mr-3 flex flex-col'>
              <LabelInput
                label='ID'
                type='number'
                ref={idRef}
                classNames='mt-3 rounded border p-3'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='name' className='font-bold'>
                Name
              </label>
              <input
                className='mt-3 rounded border p-3'
                type='text'
                id='name'
                ref={nameRef}
                placeholder='name...'
              />
            </div>
          </div>

          <Button
            classNames='my-5 rounded bg-green-200 px-3 py-2'
            text='SignIn'
          />
        </form>
      </div>
    </>
  );
}
