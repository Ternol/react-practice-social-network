const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postsData: [
        {message: 'Сегодня учу props', id: 3, likesCount: 10},
        {message: 'Как дела?', id: 2, likesCount: 14},
        {message: 'Привет всем!', id: 1, likesCount: 21},
    ],
    newPostText: '',
}
const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST : {
            let messageBody = state.newPostText
            return {
                ...state,
                postsData: [
                    {message: messageBody, id: 4, likesCount: 0,}, ...state.postsData
                ],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT : {
            return {...state, newPostText: action.text};
        }
        default:
            return state;
    }

}

export default profileReducer;


export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text,
})