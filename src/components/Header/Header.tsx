import React, {FC} from "react";
import logo from '../../img/icons/logo-32.png'
import arrDwnIcon from '../../img/icons/arrow-16.png'
import s from './header.module.css';
import {useHistory} from "react-router-dom";
import {headerLinks} from "../../routes/headerLinks";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useLogoutThunk} from "../../hooks/useLogoutThunk";


const Header:FC = () => {
    const {login, isAuth} = useTypedSelector(state => state.auth)
    const router = useHistory();

    const logoutUser = useLogoutThunk()
    return (
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
                        {isAuth
                            ?
                            <div>
                                <div className={s.loginDropDown} onClick={logoutUser}><span>Exit</span></div>
                                <span className={s.loginName}>{login}</span>
                                <img src={arrDwnIcon} alt={'arrowDwn'}/>
                            </div>
                            : <div onClick={() => router.push('/login/')}><span>LogIn</span></div>
                        }
                    </div>
                </div>
            </div>
    )
}
export default Header;