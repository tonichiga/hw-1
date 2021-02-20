import Profile from './components/profile/index';
import user from './users/user.json';
import Statistics from './components/statistics';
import statistic from './users/statistical-data.json';
import friends from './users/friends-list.json';
import FriendsList from './components/friend-list';
import transactions from './users/transactions.json';
import Transaction from './components/Transaction';
import PropTypes from 'prop-types';
const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Uploads data" statData={statistic} />
      <FriendsList data={friends} />

      <Transaction
        type={'type'}
        amount={'amount'}
        currency={'currency'}
        data={transactions}
      />
    </div>
  );
};

export default App;

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
Statistics.propTypes = {
  title: PropTypes.string,
};
Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
