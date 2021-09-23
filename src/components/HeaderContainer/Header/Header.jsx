import React, {useState} from "react";
import logo from './../../../img/icons/logo-32.png'
import arrDwnIcon from './../../../img/icons/arrow-16.png'
import s from './header.module.css';
import {useHistory} from "react-router-dom";
import {headerLinks} from "../../../routes/headerLinks";


const Header = (props) => {
    const router = useHistory();
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.headerBlock}>
                    <div className={s.logoBlock}>
                        <div className={s.logo}><img src={logo} alt="logo"/></div>
                        <div className={s.label}>Project for practice</div>
                    </div>
                    <div className={s.linksBlock}>
                        {headerLinks.map(linkItem => <div className={s.linkItem}
                                                          key={linkItem.path}
                                                          onClick={() => router.push(linkItem.path)}>
                                                          <img src={linkItem.icon} alt=''/>
                                                          <p>{linkItem.text}</p> </div>)}
                    </div>
                    <div className={s.loginBlock}>
                        {props.isAuth
                            ?
                            <div>
                                <div className={s.loginDropDown} onClick={props.logoutUser}><span>Exit</span></div>
                                <span className={s.loginName}>{props.login}</span>
                                <img src={arrDwnIcon} alt={'arrowDwn'}/>
                            </div>
                            : <div onClick={() => router.push('/login/')}><span>LogIn</span></div>
                        }
                    </div>
                </div>
            </div>
        </header>


        // <header className={s.header}>
        //     <img
        //         src={logo}
        //         alt="logo"/>
        //     <div className={s.loginBlock}>
        //         {
        //             props.isAuth ? <div className={s.loginBlock__user}>
        //                     <span>{props.login}</span>
        //                     <div className={s.loginBlock_logout} onClick={props.logoutUser}>
        //                         <span>Выйти</span>
        //                     </div>
        //             </div>
        //                 : <NavLink to='/login'>Войти</NavLink>
        //         }
        //     </div>
        // </header>
    )
}
export default Header;