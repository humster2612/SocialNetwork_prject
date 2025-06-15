// MenuLine.jsx
import React from 'react';
import s from './MenuLine.module.css';
import { Link } from 'react-router-dom';

const MenuLine = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <Link to="/">TIMELINE</Link> 
            </div>

            <div className={s.item}>
                <Link to="/profile">PROFILE</Link> {/* 👈 добавь вот это */}
            </div>
            <div className={s.item}>
            <Link to="/explore">EXPLORE</Link>
            </div>
            <div className={s.item}>
                <Link to="/dialogs">DIALOGPAGE</Link> 
            </div>

            {/* <div className={s.item}>
                <Link to="/users">USERS</Link> 
            </div> */}
            <div className={s.item}>
                <Link to="/users">DESTINETION</Link> 
            </div>
        </div>
    );
};

export default MenuLine;

