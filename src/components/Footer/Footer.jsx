import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.columnIcTeFooter}>
        <div className={s.iconFooter}>
          <img src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/dark_logo.svg" alt='logo' />
        </div>
        <div className={s.textFooter}>
          Dive into a world of journeys, connections, and shared stories. Designed for wanderers, thinkers, and creators alike.
        </div>
      </div>
      <div className={s.columnSitesFooter}>
        <div className={s.footerLink}><a href="/">🏠 Home</a></div>
        <div className={s.footerLink}><a href="/profile">👤 Profile</a></div>
        <div className={s.footerLink}><a href="/explore">🌍 Explore</a></div>
        <div className={s.footerLink}><a href="/destination">📌 Destinations</a></div>
      </div>
    </footer>
  );
};

export default Footer;
