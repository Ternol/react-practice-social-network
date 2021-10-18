import React, {FC} from "react";
import s from './../dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string,
    id: number
}

const DialogItem:FC<PropsType> = ({name, id}) => {
    const path = '/dialogs/' + id;
    return (
        <div>
            <NavLink to={path} className={s.dialog} activeClassName={s.activeDialog}>
                {name}</NavLink>
        </div>
    )
}



export default DialogItem;