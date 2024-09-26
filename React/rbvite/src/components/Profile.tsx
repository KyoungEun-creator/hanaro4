import { Session } from '../App';
import Button from './atoms/Button';

type Props = {
  session: Session;
  logout: () => void;
};

export default function Profile({ session, logout }: Props) {
  return (
    <>
      <h1 className='text-5xl'>{session.loginUser?.name} login!</h1>
      <Button
        text='Logout'
        onClick={logout}
        classNames='my-3 rounded border border-black bg-green-500 px-3 py-2'
      />
    </>
  );
}
