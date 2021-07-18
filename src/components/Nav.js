import React from 'react'
import classes from './css/nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div><a className={classes.item} href="#">Профиль</a></div>
            <div><a className={classes.item} href="#">Сообщения</a></div>
            <div><a className={classes.item} href="#">Новости</a></div>
            <div><a className={classes.item} href="#">Музыка</a></div>
            <div><a className={classes.item} href="#">Настройки</a></div>
        </nav>
    )
}

export default Nav;