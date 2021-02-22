import React from 'react';
import s from './profile.module.scss';

const Profile = props => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={props.avatar} alt="" className={s.avatar} />
        <p className={s.name}>{props.name}</p>
        <p className={s.tag}>@{props.tag}</p>
        <p className={s.location}>{props.location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.statsElement}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{props.followers}</span>
        </li>
        <li className={s.statsElement}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{props.views}</span>
        </li>
        <li className={s.statsElement}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{props.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
