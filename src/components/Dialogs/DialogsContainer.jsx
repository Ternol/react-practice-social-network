import React from "react";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    messagesData: state.dialogsPage.messagesData,
    dialogsData: state.dialogsPage.dialogsData,
    messageBody: state.dialogsPage.newMessageBody,
})

const mapDispatchToProps = (dispatch) => ({
    onMessageBody: (text) => dispatch(updateNewMessageBodyActionCreator(text)),
    addMessage: () => dispatch(addMessageActionCreator()),
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;

