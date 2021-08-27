import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://w7.pngwing.com/pngs/113/271/png-transparent-logo-symbol-sign-company-logo-miscellaneous-leaf-label-thumbnail.png"
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