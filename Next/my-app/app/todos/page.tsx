import Link from 'next/link';
import { getTodos } from '@/lib/todos';

// SSR
export const dynamic = 'force-static';

export default async function Todos() {
  const todos = await getTodos();

  return (
    <>
      <h1 className='text-2xl'>Todo #1</h1>
      <ul className='border p-3'>
        {todos.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/todos/${id}`}>
              <small className='text-sm'>{id}</small>.{title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
