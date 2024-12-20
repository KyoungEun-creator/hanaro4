import { getTodos } from '@/lib/todos';

export const revalidate = 5;
// export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return (await getTodos(1)).map(({ id }: { id: number }) => {
    {
      id.toString();
    }
  });
}

export default async function AboutTodos({
  params: { id },
}: {
  params: { id: string };
}) {
  const todos = await getTodos(1);
  const todo = todos.find((td) => td.id === +id);
  if (!todo) {
    // return <h1 className='text-2xl text-red-500'>#{id} is not found!</h1>;
    throw new Error(`#${id} is not found!`);
  }

  const { title, completed } = todo;

  return (
    <>
      <h1 className='text-2xl'>About Todo #{id}</h1>
      <strong className={`${completed ? 'line-through' : 'font-extrabold'}`}>
        title: {title}
      </strong>
    </>
  );
}
