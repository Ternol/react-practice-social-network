import React, {FC} from "react";
import s from './../dialogs.module.css';

type propsType = {
    text: string
}

const Message:FC<propsType> = ({text}) => {
    return (
        <div className={s.message}>{text}</div>
    )
}


export default Message;