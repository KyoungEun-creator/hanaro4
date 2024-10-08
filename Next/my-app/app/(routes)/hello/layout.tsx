import { PropsWithChildren } from 'react';

export default function HelloLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className='border p-5'>
        <h1 className='text-2xl'>Hello Layout</h1>
        <div className='flex gap-3'>
          <a href='/hello/morning'>morning</a>
          <a href='/hello/afternoon'>afternoon</a>
          <a href='/hello/evening'>evening</a>
        </div>
        <div className='bg-purple-400 flex justify-center'>{children}</div>
      </div>
    </>
  );
}
