import { FormEvent, useState } from 'react';
import LabelInput from './molecules/LabelInput';
import Button from './atoms/Button';

export default function Login({
  login,
}: {
  login: (id: number, name: string) => void;
}) {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
                onChange={(e) => setId(+e.currentTarget.value)}
                classNames='mt-3 rounded border p-3'
              />
            </div>
            <div className='flex flex-col'>
              <LabelInput
                label='Name'
                onChange={(e) => setName(e.currentTarget.value)}
                classNames='mt-3 rounded border p-3'
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
