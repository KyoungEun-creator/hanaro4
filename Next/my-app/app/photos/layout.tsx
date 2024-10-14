import { ReactNode } from 'react';

export default function PhotosLayout({
  children,
  viewer,
}: {
  children: ReactNode;
  viewer: ReactNode;
}) {
  return (
    <>
      <div className='bg-cyan-300 w-full text-center'>Photos Header</div>
      {children}
      {/* photoId로 가기 전 intercept 할 때만 보여야 함 */}
      <div>{viewer}</div>
    </>
  );
}
