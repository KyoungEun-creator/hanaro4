import Link from 'next/link';
import { Suspense } from 'react';
import { auth } from '@/lib/auth';

export default async function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  // console.log('🚀   session:', session);

  return (
    <>
      <div className='border p-5 flex flex-col gap-4'>
        <div>
          <a href='/about/me'>Go Me</a> | <a href='/about/1'>Go Todo#1</a>
        </div>

        <h1 className='text-2xl'>About Layout: {session?.user?.name}</h1>
        <Suspense fallback={<h1>...loading</h1>}>{children}</Suspense>
        {session?.user ? (
          <Link href={'/api/auth/signout?callbackUrl=/'}>Logout</Link>
        ) : (
          <Link href={'/api/auth/signin'}>Login</Link>
        )}
      </div>
    </>
  );
}
