import { FormEvent, useImperativeHandle, useRef } from 'react';
import LabelInput from './molecules/LabelInput';
import Button from './atoms/Button';
import { useSession } from '../hooks/session-context';

export type LoginHandler = {
  focus: (prop: string) => void;
};

export default function Login() {
  const { login, loginRef } = useSession(); // useContext

  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  // focus를 위한 handler 생성 -> useSession에 전달해주고 싶음
  const handler: LoginHandler = {
    focus(prop) {
      if (prop === 'id') idRef.current?.focus();
      if (prop === 'name') nameRef.current?.focus();
    },
  };
  useImperativeHandle(loginRef, () => handler);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idRef.current?.value ?? 0;
    const name = nameRef.current?.value ?? '';
    login(+id, name);
  };

  return (
    <>
      <div className='flex w-1/2 flex-col items-center p-5'>
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

          <Button classNames='flex justify-center my-2 rounded border border-black bg-green-500 px-3 py-2'>
            SignIn
          </Button>
        </form>
      </div>
    </>
  );
}
