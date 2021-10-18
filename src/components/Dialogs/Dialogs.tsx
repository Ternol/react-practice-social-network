import React, {FC} from "react";
import s from './dialogs.module.css';
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";
import NewMessageForm from "./NewMessageForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const Dialogs:FC = () => {

    const {dialogsData, messagesData} = useTypedSelector(state => state.dialogsPage)

    const dialogElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
        )

    const messageElements = messagesData
        .map(message => <Message text={message.message} key={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                < NewMessageForm />
            </div>
        </div>
    )
}

export default Dialogs;