import { Session } from '../App';
import Login from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
};

export default function My({ session, logout, login }: Props) {
  return (
    <>
      {session.loginUser ? (
        <Profile session={session} logout={logout} />
      ) : (
        <div className='flex justify-center'>
          <Login login={login} />
        </div>
      )}

      <ul>
        {session.cart.map(({ id, name, price }) => {
          return (
            <li key={id}>
              {name} <small className='font-'>({price.toLocaleString()})</small>
            </li>
          );
        })}
      </ul>
    </>
  );
}
