import Link from 'next/link';

export default function ParallelLayout({
  children,
  login,
  profile,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  profile: React.ReactNode;
}) {
  const didLogin = false;

  return (
    <>
      <h1 className='text-2xl'>Parallel Layout</h1>
      <Link href='/parallel/aaa'>Login/aaa</Link>
      <Link href='/parallel/bbb'>Profile/bbb</Link>

      {didLogin ? (
        <div className='flex justify-between gap-3 border p-3'>
          <div className='bg-purple-400'>{login}</div>
          <div className='bg-green-400'>{profile}</div>
        </div>
      ) : (
        <div className='bg-purple-400'>{login}</div>
      )}
      <hr className='my-3' />
      {children}
    </>
  );
}
