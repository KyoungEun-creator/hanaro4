import { getBook } from '@/actions/books';
import { Pencil1Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import DelBook from '@/components/DelBook';
import { Button } from '@/components/ui/button';
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
      <div className='flex flex-col space-y-3'>
        <span className='border-b-2 border-green-500 flex justify-between'>
          bookId: <strong>{bookId}</strong>
        </span>
        <span className='border-b-2 border-green-500 flex justify-between'>
          title: <strong>{book.title}</strong>
        </span>
        <span className='border-b-2 border-green-500 flex justify-between'>
          writer: <strong>{book.writer}</strong>
        </span>

        <div className='space-x-4 flex items-center justify-center'>
          <DelBook id={+bookId} />
          <Link href={`/books/${bookId}/edit`}>
            <Button variant={'outline'}>
              <Pencil1Icon /> Edit
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
