import React from "react";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    const onMessageBodyChange = (text) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(text))
    }

    const onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    return <Dialogs onMessageBody={onMessageBodyChange} addMessage={onAddMessage}
    messagesData={state.messagesData} dialogsData={state.dialogsData} messageBody={state.newMessageBody}/>
}

export default DialogsContainer;