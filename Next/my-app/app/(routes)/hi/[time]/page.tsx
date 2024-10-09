type TParams = {
  params: {
    time: string;
    cmt: string;
  };
};

export function generateStaticParams() {
  return ['morning', 'afternoon', 'evening', 'night'].map((time) => ({ time }));
}

export default function Time({ params: { time, cmt } }: TParams) {
  return (
    <div className='capitalize'>
      Good {time} - comment: <div>{cmt}</div>!!!
    </div>
  );
}
