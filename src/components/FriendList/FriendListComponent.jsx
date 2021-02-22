import React from 'react';
import Friend from './components/FriendList';
import s from './friend-list.module.scss';
import PropTypes from 'prop-types';

const FriendsList = ({ data }) => (
  <section className={s.friendSection}>
    <ul className={s.frienList}>
      <Friend data={data} />
    </ul>
  </section>
);

export default FriendsList;
