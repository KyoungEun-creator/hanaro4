const BASE_URL = 'https://jsonplaceholder.typicode.com';

export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getTodo = async (todoId: number) => {
  const res = await fetch(`${BASE_URL}/todos/${todoId}`, {
    next: { revalidate: 5 }, // ISR
  });
  const data = await res.json();
  return data as TTodo;
};

export const getTodos = async (userId: number = 1) => {
  const res = await fetch(`${BASE_URL}/todos?userId=${userId}`, {
    cache: 'force-cache', // SSG: 같은 url은 다시 부르지 않음
    // cache: 'no-store', // SSR
    // next: { revalidate: 5 }, // ISR
  });

  const data = await res.json();
  return data as TTodo[];
};
