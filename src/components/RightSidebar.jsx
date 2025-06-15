import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RightSidebar.css';

const RightSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="right-sidebar">
      <div className="popular-trip">
        <h2>Popular Trip</h2>
        <div className="trip-card">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="van" />
          <p className="date">September 17, 2018 - Tips & Tricks</p>
          <h3>Finding Love & home in Tbilisi, Georgia</h3>
          <div className="arrows">
            <button className="blue-arrow" onClick={() => navigate('/destination')}>→</button>
          </div>
        </div>
      </div>

      <div className="user-list">
        <h2>Users</h2>

        <div className="user">
          <img src="https://i.pravatar.cc/40?img=1" alt="Carla" />
          <div className="user-details">
            <p className="date">September 17, 2018 - Tip & Tricks</p>
            <h4>Carla Fluiis</h4>
            <button className="follow-btn" onClick={() => navigate('/explore')}>Explore</button>
          </div>
        </div>

        <div className="user">
          <img src="https://i.pravatar.cc/40?img=2" alt="Bang" />
          <div className="user-details">
            <p className="date">September 17, 2018 - Tips & Tricks</p>
            <h4>Bang Ollow</h4>
            <button className="follow-btn" onClick={() => navigate('/explore')}>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;