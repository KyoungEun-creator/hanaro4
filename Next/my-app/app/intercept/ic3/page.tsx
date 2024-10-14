import Link from 'next/link';

export default function Ic3() {
  return (
    <>
      <h1 className='text-2xl'>IC3 - org</h1>
      <Link href='/intercept/ic2'>IC1</Link>
      <Link href='/intercept/ic2'>IC2</Link>
      <Link href='/about'>About</Link>
    </>
  );
}