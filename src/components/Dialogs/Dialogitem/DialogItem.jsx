import React from "react";
import s from './../dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path} className={s.dialog} activeClassName={s.activeDialog}>
                {props.name}</NavLink>
        </div>
    )
}



export default DialogItem;