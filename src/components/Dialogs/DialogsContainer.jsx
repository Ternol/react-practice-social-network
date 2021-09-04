import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage} from "../../redux/reducers/dialogsReducer";

const mapStateToProps = (state) => ({
    messagesData: state.dialogsPage.messagesData,
    dialogsData: state.dialogsPage.dialogsData,
    messageBody: state.dialogsPage.newMessageBody,
})



const DialogsContainer = connect(mapStateToProps, {addMessage})(Dialogs)


export default DialogsContainer;

