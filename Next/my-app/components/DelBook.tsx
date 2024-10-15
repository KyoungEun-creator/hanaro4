'use client';

import { delBook } from '@/actions/books';
import { TrashIcon } from 'lucide-react';
// import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

type TProps = {
  id: number;
};

export default function DelBook({ id }: TProps) {
  // const router = useRouter();

  // const remove = async () => {
  //   if (!confirm('Are you sure?')) return;

  //   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/books/${id}`, {
  //     method: 'DELETE',
  //   }).then((res) => res.json());
  //   console.log('🚀   res:', res);

  //   if (res.code === 200) {
  //     router.push('/books');
  //   }
  // };

  return (
    <Button
      onClick={async () => {
        if (confirm('Are you sure?')) delBook(id);
      }}
      variant={'destructive'}
    >
      <TrashIcon />
      Del
    </Button>
  );
}
