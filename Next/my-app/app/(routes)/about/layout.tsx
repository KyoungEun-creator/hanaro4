import { PropsWithChildren, Suspense } from 'react';

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className='border p-5'>
        <a href='/about/me'>ME</a>
        <h1 className='text-2xl'>About Layout</h1>
        <Suspense fallback={<h1>...loading</h1>}>{children}</Suspense>
      </div>
    </>
  );
}
