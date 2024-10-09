import Link from 'next/link';
import { ReactNode } from 'react';

export default function ParallelLayout({
  children,
  login,
  profile,
}: {
  children: ReactNode;
  login: ReactNode;
  profile: ReactNode;
}) {
  return (
    <>
      <h1 className='text-2xl'>Parallel Layout</h1>
      <Link href='/parallel/aaa'>Login/aaa</Link>
      <Link href='/parallel/bbb'>Profile/bbb</Link>
      <div className='flex justify-between gap-3 border p-5'>
        <div className='text-yellow-300'>{login}</div>
        <div className='text-pink-300'>{profile}</div>
      </div>
      <hr />
      {children}
    </>
  );
}
