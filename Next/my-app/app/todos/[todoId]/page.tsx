import Link from 'next/link';
import { getTodo } from '@/lib/todos';

// 5초 revalitdate
export const revalidate = 5;

export default async function Todo({
  params: { todoId },
}: {
  params: { todoId: string };
}) {
  const { title, completed } = await getTodo(+todoId);
  console.log('todos/todo >>', todoId);

  if (!title) {
    // return <h1 className='text-2xl text-red-500'>#{todoId} is not found!</h1>;
    throw new Error(`#${todoId} is not found!`);
  }

  return (
    <div className='text-left'>
      <div>id: {todoId}</div>
      <div>title: {title}</div>
      <div>completed: {completed ? 'Done!' : 'Doing~'}</div>
      <Link href='/todos'>Go List</Link>
    </div>
  );
}
