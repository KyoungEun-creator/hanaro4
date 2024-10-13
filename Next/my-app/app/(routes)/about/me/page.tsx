'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Me() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams(); // get은 되나, set은 안됨
  const urlSearchParams = new URLSearchParams(searchParams.toString());
  console.log('🚀   urlParams:', urlSearchParams.toString());

  const goBack = () => {
    router.back();
  };
  const goHello = () => {
    router.push('/hello', { scroll: false });
  };

  const changeSearchParams = (x: string) => {
    urlSearchParams.set('xxx', x);
    router.push(`${pathname}?${urlSearchParams.toString()}`);
  };

  return (
    <>
      <div className='flex border flex-col items-center'>
        <button onClick={goBack} className='border border-blue-500 p-2'>
          Go Back
        </button>
        <button onClick={goHello} className='border border-red-500 p-2'>
          Go Hello
        </button>
        <button
          onClick={() => changeSearchParams('999')}
          className='border border-green-500 p-2'
        >
          change-xxx
        </button>
      </div>
      Me Page: {pathname}?xxx={searchParams.get('xxx')}
    </>
  );
}
