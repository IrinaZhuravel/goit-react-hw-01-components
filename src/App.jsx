import {Profile} from './components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from './data/user.json';
import Data from './data/data.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
    <Profile 
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          />
    <Statistics data={Data}/>
    </div>
  );
};

