'use client';

import { useFetch } from '@/hooks/fetch-hook';
import Link from 'next/link';
import { ReactNode } from 'react';
import { type TBook } from '../api/books/bookdata';

export default function BooksLayout({ children }: { children: ReactNode }) {
  //   const [books, setBooks] = useState<TBook[]>([]);

  const {
    data: books,
    isLoading,
    error,
  } = useFetch<TBook[]>(`${process.env.NEXT_PUBLIC_URL}/api/books`);

  if (error) return <div className='text-red-500'>{error.message}</div>;

  //   useLayoutEffect(() => {
  //     (async function () {
  //       const books = (await fetch('http://localhost:3000/api/books').then(
  //         (res) => res.json()
  //       )) as TBook[];
  //       setBooks(books);
  //     })();
  //   }, []);

  return (
    <>
      <h1 className='text-2xl my-3'>My Book Case</h1>
      <div className='grid grid-cols-2 gap-3 w-full border border-green-400 p-4'>
        {isLoading ? (
          <>is loading..</>
        ) : (
          <ul className='border p-3'>
            {books?.map(({ id, title }) => (
              <li key={id}>
                <Link href={`/books/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        )}

        <div className='border p-3'>{children}</div>
      </div>
    </>
  );
}
