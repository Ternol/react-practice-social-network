const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
    dialogsData: [{name: 'Александр', id: 1},
        {name: 'Владислав', id: 2},
        {name: 'Настя', id: 3},
        {name: 'Володя', id: 4},
        {name: 'Илон Маск', id: 5},
    ],
    messagesData: [{message: '42', id: 1},
        {message: 'Как дела?', id: 2},
        {message: 'Привет', id: 3},
    ],
    newMessageBody : '',
};



const dialogsReducer = (state = initialState, action) => {
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
