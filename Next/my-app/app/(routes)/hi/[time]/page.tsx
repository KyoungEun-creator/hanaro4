type TParams = {
  params: {
    time: string;
  };
};

export function generateStaticParams() {
  return ['morning', 'afternoon', 'evening', 'night'].map((time) => ({ time }));
}

export default function Time({ params: { time } }: TParams) {
  return <div className='capitalize'>Good {time}!!!</div>;
}