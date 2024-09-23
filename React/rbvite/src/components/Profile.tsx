import { Session } from '../App';

type Props = {
  session: Session;
  logout: () => void;
};

export default function Profile({ session, logout }: Props) {
  return (
    <>
      <h1 className='text-5xl'>{session.loginUser?.name} login!</h1>
      <button
        className='my-3 rounded border border-black bg-green-500 px-3 py-2'
        onClick={logout}
      >
        로그아웃
      </button>
    </>
  );
}
