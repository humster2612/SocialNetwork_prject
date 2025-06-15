// components/CreatePostPage.jsx
import React from 'react';
import CreatePost from '../components/Crator/CreatePost'; // путь может отличаться
import s from './CreatePostPage.module.css';

const CreatePostPage = ({ onPostCreated }) => {
  return (
    <div className={s.page}>
    
      <CreatePost onPostCreated={onPostCreated} />
    </div>
  );
};

export default CreatePostPage;
