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
};



const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            const newMessageBody = action.text
            return {
                ...state,
                messagesData: [...state.messagesData, {message: newMessageBody, id: 4}],
            }
        default:
            return state;
    }

}

export default dialogsReducer;

export const addMessage = (text) => ({
    type: ADD_MESSAGE, text
})
