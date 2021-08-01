const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const ADD_MESSAGE = 'ADD_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            state.newMessageBody = action.text
            return state;
        case ADD_MESSAGE :
            const newMessage = {message: state.newMessageBody, id: 4};
            state.messagesData.push(newMessage);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }

}

export default dialogsReducer;

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})
export const updateNewMessageBodyActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    text: text
})
