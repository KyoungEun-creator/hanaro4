type TitleProps = { name: string };
type AgeProps = { age: number };

const Title = ({ name }: TitleProps) => {
  return <h1>Hello, {name}</h1>;
};
const Age = ({ age }: AgeProps) => {
  return <div style={{ color: 'red' }}>{`(${age})`}</div>;
};

export default function Hello() {
  return (
    <>
      <div>
        <Title name={'Jade'} />
        <Age age={29} />
      </div>
    </>
  );
}
