import React from 'react';
import s from './UserCard.module.css';

const UserCard = ({ user, isSubscribed, onToggle, disabled }) => {
  const avatarUrl = user.avatar || `https://i.pravatar.cc/100?u=${user._id}`;
  return (
    <div className={s.card}>
      <img src={avatarUrl} alt={user.username} className={s.avatar} />
      <div>
        <h3>{user.username}</h3>
        <p>{user.bio || ''}</p>
        <button
          onClick={() => onToggle(user._id)}
          className={isSubscribed ? s.btnSubscribed : s.btn}
          disabled={disabled}
        >
          {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>
      </div>
    </div>
  );
};

export default UserCard;