type TParams = {
  params: {
    time: string;
    cmt: string;
  };
};

export default function Time({ params: { time, cmt } }: TParams) {
  return (
    <div className='capitalize'>
      Good {time} - comment:
      <span className='text-red-500 font-bold'>{cmt}</span>
    </div>
  );
}
