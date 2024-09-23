import { FormEvent } from 'react';

export default function Login({
  login,
}: {
  login: (id: number, name: string) => void;
}) {
  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elems = e.currentTarget.elements;
    const { id, name } = elems as typeof elems & {
      id: HTMLInputElement;
      name: HTMLInputElement;
    };

    if (!id.value) {
      alert('id needed!');
      id.focus();
      return;
    } else if (!name.value) {
      alert('name needed!');
      name.focus();
      return;
    }

    login(+id.value, name.value);
  };

  return (
    <>
      <div className='flex w-1/2 flex-col items-center border p-5'>
        <h1 className='text-5xl font-bold'>Sign In</h1>
        <form onSubmit={signIn} className='mt-3 flex flex-col justify-between'>
          <div className='flex'>
            <div className='mr-3 flex flex-col'>
              <label htmlFor='id' className='font-bold'>
                ID
              </label>
              <input
                className='mt-3 rounded border p-3'
                type='text'
                id='id'
                placeholder='id'
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
                placeholder='name'
              />
            </div>
          </div>
          <button className='my-5 rounded bg-green-200 px-3 py-2'>
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
