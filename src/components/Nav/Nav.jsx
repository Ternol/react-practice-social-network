import React from 'react'
import s from './nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>Профиль</NavLink></div>
            <div><NavLink to="/dialogs" className={s.item} activeClassName={s.activeLink}>Сообщения</NavLink></div>
            <div><NavLink to="/news" className={s.item} activeClassName={s.activeLink}>Новости</NavLink></div>
            <div><NavLink to="/music" className={s.item} activeClassName={s.activeLink}>Музыка</NavLink></div>
            <div><NavLink to="/settings" className={s.item} activeClassName={s.activeLink}>Настройки</NavLink></div>
        </nav>
    )
}

export default Nav;