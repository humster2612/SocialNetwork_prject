import React, { useState } from 'react';
import axios from 'axios';
import Comment from './Comment';
import NewCommentForm from './NewCommentForm';
import s from '../components/Post.module.css';

const Post = ({ post, onUpdate, onDelete }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [showAll, setShowAll] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const currentUsername = currentUser?.username || 'You';
  const currentAvatar = currentUser?.avatar || `https://i.pravatar.cc/200?u=667620fb59365e0e6033ed22`;

  const displayUsername = post.user === 'Ты' ? currentUsername : post.user;
  const displayAvatar = post.avatar || `https://i.pravatar.cc/40?u=${displayUsername}`;

  const handleLike = async () => {
    try {
      const res = await axios.post(`http://localhost:1000/api/posts/${post._id}/like`, {
        user: currentUsername,
        avatar: currentAvatar,
      });
      setLikes(res.data.likes);
      onUpdate(res.data);
    } catch (err) {
      console.error('Error liking post:', err);
    }
  };

  const addComment = async (text) => {
    try {
      const res = await axios.post(`http://localhost:1000/api/posts/${post._id}/comments`, {
        user: currentUsername,
        avatar: currentAvatar,
        text,
      });
      setComments(res.data.comments);
      onUpdate(res.data);
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Delete this post?')) {
      try {
        await axios.delete(`http://localhost:1000/api/posts/${post._id}`);
        onDelete(post._id);
      } catch (err) {
        console.error('Error deleting post:', err);
      }
    }
  };

  return (
    <div className={s.card}>
      <div className={s.header}>
        <div className={s.userInfo}>
          <img
            src={displayAvatar}
            alt={displayUsername}
            className={s.userAvatar}
          />
          <div className={s.userName}>{displayUsername}</div>
        </div>
        <button className={s.delete} onClick={handleDelete}>🗑</button>
      </div>

      <img src={post.image} alt="Post" />
      <p>{post.text}</p>

      <div className={s.likesRow}>
        <div className={s.likeContainer}>
          <button onClick={handleLike}>❤️</button>
          <span>{likes}</span>
        </div>

        {post.likedBy?.length > 0 && (
          <div className={s.avatarGroup}>
            {post.likedBy.slice(0, 3).map((u, i) => (
              <img key={i} src={u.avatar} alt={u.user} className={s.avatar} />
            ))}
            <span>
              <strong>{post.likedBy[0].user}</strong>{' '}
              {post.likedBy.length > 1 && `and ${post.likedBy.length - 1} more`}
            </span>
          </div>
        )}

        <span className={s.commentCount}>💬 Comments: {comments.length}</span>
      </div>

      <div className={s.comments}>
        {(showAll ? comments : comments.slice(0, 3)).map((c) => (
          <Comment key={c._id || c.id} comment={c} />
        ))}
        {comments.length > 3 && (
          <button onClick={() => setShowAll(!showAll)} className={s.showMore}>
            {showAll
              ? 'Hide comments'
              : `Show ${comments.length - 3} more comments`}
          </button>
        )}
      </div>

      <NewCommentForm onAdd={addComment} />
    </div>
  );
};

export default Post;
