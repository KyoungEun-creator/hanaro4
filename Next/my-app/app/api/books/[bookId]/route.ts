// 하나의 book 정보
import { getBook } from '@/actions/books';
import NotFoundBook from '../../../books/not-found';

type TParams = {
  params: {
    bookId: string;
  };
};

export function GET(req: Request, { params: { bookId } }: TParams) {
  const book = getBook(+bookId);
  if (!book) return NotFoundBook;

  return Response.json(book);
}
