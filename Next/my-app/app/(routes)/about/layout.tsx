import { Suspense } from 'react';

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='border p-5'>
        <a href='/about/me'>Go Me</a>
        <h1 className='text-2xl'>About Layout</h1>
        <Suspense fallback={<h1>...loading</h1>}>{children}</Suspense>
      </div>
    </>
  );
}
