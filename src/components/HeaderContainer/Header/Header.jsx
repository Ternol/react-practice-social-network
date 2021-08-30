import React from "react";
import logo from './../../../img/logo.png'
import s from './header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src={logo}
                alt="logo"/>
            <div className={s.loginBlock}>
                {
                    props.isAuth ? <span>{props.login}</span>
                        : <NavLink to='/login'>Войти</NavLink>
                }
            </div>
        </header>
    )
}
export default Header;