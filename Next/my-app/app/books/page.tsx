'use client';

import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { type TBook } from '../api/books/bookdata';

export default function Books() {
  const [books, setBooks] = useState<TBook[]>([]);
  const [searchStr, setSearchStr] = useState('');

  useLayoutEffect(() => {
    (async function () {
      const books = (await fetch(`${process.env.BASE_URL}/api/books`).then(
        (res) => res.json()
      )) as TBook[];
      setBooks(books);
    })();
  }, []);

  return (
    <>
      <h1 className='text-2xl'>My Books</h1>
      <Input
        onChange={(e) => setSearchStr(e.currentTarget.value)}
        placeholder='title or writer'
      />
      <ul>
        {books
          .filter(
            ({ title, writer }) =>
              title.includes(searchStr) || writer.includes(searchStr)
          )
          .map(({ id, title }) => (
            <li key={id}>
              <Link href={`/books/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
