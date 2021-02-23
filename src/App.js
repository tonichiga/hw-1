import React from 'react';
import PropTypes from 'prop-types';

import Profile from './components/Profile/index';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendList/FriendListComponent';
import Transaction from './components/Transaction/Transaction';

import user from './data/user.json';
import transactions from './data/transactions.json';
import friends from './data/friends-list.json';
import statistic from './data/statistical-data.json';

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
