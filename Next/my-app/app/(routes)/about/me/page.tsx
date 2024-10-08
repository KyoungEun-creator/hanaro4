'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Me() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams.toString());
  // console.log('🚀   urlParams:', urlSearchParams);

  const goBack = () => {
    router.back();
  };
  const goHello = () => {
    router.push('/hello', { scroll: false });
  };

  const changeSearchParams = (x: string) => {
    urlSearchParams.set('xxx', x);
    router.push(`${pathname}${urlSearchParams.toString()}`);
  };

  return (
    <>
      <div className='flex border flex-col items-center'>
        <button onClick={goBack}>Go Back</button>
        <button onClick={goHello}>Go Hello</button>
        <button onClick={() => changeSearchParams('999')}>change-xxx</button>
      </div>
      Me Page: {pathname}?xxx={searchParams.get('xxx')}
    </>
  );
}
