import user from '../data/user.json';

import { Profile } from './profile/profile';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
