import { books, TBook } from '@/app/api/books/bookdata';

export const getBook = (bookId: number) => {
  const book = books.find(({ id }) => id === +bookId) as TBook;
  return book;
};
