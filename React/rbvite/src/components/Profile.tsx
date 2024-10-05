import { ForwardedRef, forwardRef } from 'react';
import { useSession } from '../hooks/session-context';

const Profile = forwardRef(
  (_: unknown, ref: ForwardedRef<HTMLButtonElement>) => {
    const { session, logout } = useSession();
    return (
      <div className='border p-5'>
        <h1 className='text-5xl'>Welcome, {session.loginUser?.name}</h1>
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
