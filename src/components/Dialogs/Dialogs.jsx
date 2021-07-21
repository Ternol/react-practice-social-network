import React from "react";
import s from './dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path} className={s.dialog} activeClassName={s.activeDialog}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                <DialogsItem name='Александр' id='1'/>
                <DialogsItem name='Владислав' id='2'/>
                <DialogsItem name='Настя' id='3'/>
                <DialogsItem name='Володя' id='4'/>
                <DialogsItem name='Илон Маск' id='5'/>
            </div>
            <div className={s.messages}>
                <Message text='42'/>
                <Message text='Как дела?'/>
                <Message text='Привет'/>
            </div>
        </div>
    )
}

export default Dialogs;