const ADD_MESSAGE = 'dialogsReducer/ADD_MESSAGE';
export type InitialStateType = {
    dialogsData: Array<DialogsDataStateType>
    messagesData: Array<MessagesDataStateType>
}
type DialogsDataStateType = {
    name: string
    id: number
}
type MessagesDataStateType = {
    message: string
    id: number
}
const initialState:InitialStateType = {
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



const dialogsReducer = (state = initialState, action:AddMessageType):InitialStateType => {
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

type AddMessageType = {
    type: typeof ADD_MESSAGE
    text: string
}

export const addMessage = (text:string):AddMessageType => ({
    type: ADD_MESSAGE, text
})
