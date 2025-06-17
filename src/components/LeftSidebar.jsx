import React from 'react';
import { useNavigate } from 'react-router-dom';
// import s from './Timeline.module.css';
import s from '../components/LeftSidebar.module.css';


const LeftSidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className={s.sidebar}>
      <div className={s.aboutCard} style={{ width: '360px', marginBottom: '20px' }}>
        <h2>About me</h2>
        <img src="https://i.pravatar.cc/200?u=667620fb59365e0e6033ed22" alt="Profile" className={s.avatarBig} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <button className={s.readMore} onClick={() => navigate('/profile')}>Read More</button>
      </div>

      <div className={s.categoriesCard} style={{ width: '360px', marginBottom: '20px' }}>
        <h2>Categories</h2>
        <ul>
          <li>🚀 <strong>DISCOVER NEW HORIZONS!</strong></li>
          <li>🎒 GET INSPIRED BY OTHER PEOPLE'S STORIES!</li>
          <li>📍 CREATE YOUR PAGE AND SHARE YOUR STORIES!</li>
        </ul>
      </div>
    </aside>
  );
};

export default LeftSidebar;