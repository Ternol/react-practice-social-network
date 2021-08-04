import React from "react";
import s from './dialogs.module.css';
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    const dialogElements = props.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
        )

    const messageElements = props.messagesData
        .map(message => <Message text={message.message} key={message.id}/>)

    const onMessageBodyChange = (event) => {
        const currentText = event.target.value;
        props.onMessageBody(currentText);
    }

    const addMessage = () => {
        props.addMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div><textarea placeholder='Введите текст'
                               onChange={onMessageBodyChange}
                               value={props.messageBody}/></div>
                <div>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;