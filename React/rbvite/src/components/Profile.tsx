import { ForwardedRef, forwardRef } from 'react';
import { Session } from '../App';

type Props = {
  session: Session;
  logout: () => void;
};

const Profile = forwardRef(
  ({ session, logout }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <div className='border'>
        <h1 className='text-5xl'>{session.loginUser?.name} login!</h1>
        <button
          onClick={logout}
          ref={ref}
          className='my-3 rounded border border-black bg-green-500 px-3 py-2'
        >
          Profile_Logout
        </button>
      </div>
    );
  }
);

Profile.displayName = 'Profile';

export default Profile;
