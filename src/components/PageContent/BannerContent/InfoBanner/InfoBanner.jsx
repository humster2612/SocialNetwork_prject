import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance, FaYoutube } from 'react-icons/fa';
import s from './InfoBanner.module.css';

const InfoBanner = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const stored = JSON.parse(localStorage.getItem('currentUser'));
      setUser(stored);
    };

    // Загрузка сразу при монтировании
    loadUser();

    // Обновление при изменении localStorage
    const handleStorageChange = (e) => {
      if (e.key === 'currentUser') {
        loadUser();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!user) return null;

  const avatar = user.avatar || `https://i.pravatar.cc/200?u=${user.id}`;

  return (
    <div className={s.bannerWrapper}>
      <div className={s.bannerBackground}>
        <div className={s.aboutCardOverlay}>
          <div className={s.card}>
            <h4 className={s.aboutTitle}>ABOUT ME</h4>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={avatar} alt="Profile" className={s.avatarBig} />
            </div>
            <h3>{user.username}</h3>
            <p className={s.subtitle}>programmer</p>
            <p className={s.email}>{user.email}</p>
            <p className={s.location}>📍 Rzeszów</p>
          </div>
        </div>

        <div className={s.bannerContent}>
          <h1 className={s.username}>{user.username}</h1>
          <div className={s.stats}>
            <span>SUBSCRIBERS: <strong>{user.subscribers?.length || 0}</strong></span>
            <span>SUBSCRIPTIONS: <strong>{user.subscriptions?.length || 0}</strong></span>
          </div>
          <ul className={s.itemsocial}>
            <li><a href="https://www.facebook.com/" className={s.bgfb}><FaFacebookF /></a></li>
            <li><a href="https://twitter.com/" className={s.bgtwitter}><FaTwitter /></a></li>
            <li><a href="https://dribbble.com/" className={s.bgdribble}><FaDribbble /></a></li>
            <li><a href="https://www.behance.net/" className={s.bgbehance}><FaBehance /></a></li>
            <li><a href="https://www.youtube.com/" className={s.bgyoutube}><FaYoutube /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;