import React from "react";
import s from './dialogs.module.css';
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    const dialogElements = props.stateDialogs.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    )

    const messageElements = props.stateDialogs.messagesData
        .map(message => <Message text={message.message} key={message.id}/>)

    const refForTextarea = React.createRef();

    const addMessage = () => {
        alert(refForTextarea.current.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div><textarea ref={refForTextarea}></textarea></div>
                <div><button onClick={addMessage}>Отправить</button></div>
            </div>
        </div>
    )
}

export default Dialogs;