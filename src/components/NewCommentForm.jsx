// components/NewCommentForm.jsx
import React, { useState } from 'react';
import s from '../components/NewCommentForm.module.css';

const NewCommentForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
  <input
    type="text"
    placeholder="Write a comment..."
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
  <button type="submit">Send</button>
</form>

  );
};

export default NewCommentForm;
