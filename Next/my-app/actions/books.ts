import { books, TBook } from '@/app/api/books/bookdata';

export const getBook = (bookId: number) => {
  const book = books.find(({ id }) => id === +bookId) as TBook;
  return book;
};

export const save = (bookId: number, title: string, writer: string) => {
  const book = books.find((book) => book.id === bookId);
  if (!book) return Response.json({ code: 404, message: 'Not Found' });

  book.title = title;
  book.writer = writer;

  return book;
};
