import { getBook } from '@/actions/books';
import { type TBook } from '@/app/api/books/bookdata';
import NotFound from '@/app/not-found';
import NotFoundBook from '../not-found';

export default async function Book({
  params: { bookId },
}: {
  params: { bookId: string };
}) {
  //   const book = (await fetch(`http://localhost:3000/api/books/${bookId}`).then(
  //     (res) => res.json()
  //   )) as TBook;
  const book = getBook(+bookId);
  if (!book) return NotFoundBook();

  return (
    <>
      <div className='flex flex-col'>
        <span>bookId: {bookId}</span>
        <span>title: {book.title}</span>
        <span>writer: {book.writer}</span>
      </div>
    </>
  );
}
