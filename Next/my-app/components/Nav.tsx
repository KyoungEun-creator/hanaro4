import { SessionProvider } from 'next-auth/react';
import { auth } from '@/lib/auth';
import SignInOut from './SignInOut';

export default async function Nav() {
  const session = await auth();
  return (
    <nav className='flex justify-around shadow-md mb-3'>
      <a href='/'>HOME</a>
      <a href='/hello'>HELLO</a>
      <a href='/hi'>HI</a>
      <a href='/shop/aaa'>SHOP</a>
      <a href='/parallel'>PARALLEL</a>
      <a href='/intercept'>INTERCEPT</a>
      <a href='/todos'>TODOS</a>
      <a href='/photos'>PHOTOS</a>
      <a href='/books'>BOOKS</a>
      <a href='/about'>ABOUT</a>
      <SessionProvider session={session}>
        <SignInOut />
      </SessionProvider>
    </nav>
  );
}
