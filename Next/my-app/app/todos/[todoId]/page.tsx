import { Metadata } from 'next';
import Link from 'next/link';
import { getTodo, TTodo } from '@/lib/todos';

type TParams = {
  params: { todoId: string };
};

// 5초 revalitdate
export const revalidate = 5;

// (Static Metadata)
// export const metadata: Metadata = {
//   title: {
//     defualt: 'Todo',
//     template: '%s | Todo',
// }
//   description: 'Generated by create next app',
// };

// (Dynamic Metadata)
export async function generateMetadata({
  params: { todoId },
}: TParams): Promise<Metadata> {
  const todo: TTodo = await getTodo(+todoId);
  return {
    title: `Todo | ${todo.title}`,
  };
}

export default async function Todo({ params: { todoId } }: TParams) {
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