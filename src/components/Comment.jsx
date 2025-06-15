import React from 'react';
import s from '../components/Post.module.css';

const Comment = ({ comment }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const currentUsername = currentUser?.username || 'You';
  const isCurrentUser = comment.user === 'Ты' || comment.user === 'You';

  const displayName = isCurrentUser ? currentUsername : comment.user;
  const avatar = comment.avatar || `https://i.pravatar.cc/40?u=${displayName}`;

  return (
    <div className={s.comment}>
      <img src={avatar} alt={displayName} className={s.commentAvatar} />
      <div>
        <strong>{displayName}</strong> {comment.text}
      </div>
    </div>
  );
};

export default Comment;
