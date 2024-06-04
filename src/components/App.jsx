import user from '../data/user.json';
import statistics from '../data/statistics.json';

import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';

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
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />
    </div>
  );
};
