const BASE_URL = 'https://jsonplaceholder.typicode.com';

export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getTodos = async (userId: number = 1) => {
  const res = await fetch(`${BASE_URL}/todos?userId=${userId}`, {
    cache: 'force-cache', // 같은 url은 다시 부르지 않음
  });

  const data = await res.json();
  return data as TTodo[];
};

export default getTodos;
