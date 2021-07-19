import React from 'react'
import s from './nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div><a className={s.item} href="#">Профиль</a></div>
            <div><a className={s.item} href="#">Сообщения</a></div>
            <div><a className={s.item} href="#">Новости</a></div>
            <div><a className={s.item} href="#">Музыка</a></div>
            <div><a className={s.item} href="#">Настройки</a></div>
        </nav>
    )
}

export default Nav;