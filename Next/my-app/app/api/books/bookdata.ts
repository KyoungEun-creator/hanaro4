export type TBook = {
  id: number;
  title: string;
  writer: string;
  msdn?: string;
};

export const books: TBook[] = [
  {
    id: 1,
    title: '1st book',
    writer: 'kim',
  },
  {
    id: 2,
    title: '2nd book',
    writer: 'kang',
  },
  {
    id: 3,
    title: '3rd book',
    writer: 'jo',
  },
];
