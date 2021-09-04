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
                    props.isAuth ? <div className={s.loginBlock__user}>
                            <span>{props.login}</span>
                            <div className={s.loginBlock_logout} onClick={props.logoutUser}>
                                <span>Выйти</span>
                            </div>
                    </div>
                        : <NavLink to='/login'>Войти</NavLink>
                }
            </div>
        </header>
    )
}
export default Header;