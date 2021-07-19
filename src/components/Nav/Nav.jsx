import React from 'react'
import s from './nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div><a className={s.item} href="/profile">Профиль</a></div>
            <div><a className={s.item} href="/dialogs">Сообщения</a></div>
            <div><a className={s.item} href="/news">Новости</a></div>
            <div><a className={s.item} href="/music">Музыка</a></div>
            <div><a className={s.item} href="/settings">Настройки</a></div>
        </nav>
    )
}

export default Nav;