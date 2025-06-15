import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';
import { Link } from 'react-router-dom';
import s from '../components/Timeline.module.css';
import RightSidebar from './RightSidebar';
import LeftSidebar from './LeftSidebar';


const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1000/api/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.error('Ошибка при загрузке постов:', err));
  }, []);

  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map(p =>
      p._id === updatedPost._id ? updatedPost : p
    );
    setPosts(updatedPosts);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(p => p._id !== id));
  };

  return (
    <div className={s.wrapper}>
      <LeftSidebar />


      <main className={s.timeline}>
        <div style={{ textAlign: 'center' }}>
          <h1>Timeline</h1>
          <Link to="/create-post" className={s.createButton}>+ Create Post</Link>
        </div>
        {posts.length === 0 ? (
          <p>No posts to display</p>
        ) : (
          posts.map(post => (
            <Post
              key={post._id}
              post={post}
              onUpdate={updatePost}
              onDelete={handleDelete}
            />
          ))
        )}
      </main>

      <aside className={s.rightSidebar} style={{ width: '370px' }}>
        <RightSidebar />
      </aside>
    </div>
  );
};

export default Timeline;