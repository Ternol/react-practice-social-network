const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST :
            const newMessage = {
                message: state.newPostText,
                id: 4,
                likesCount: 0,
            };
            state.postsData.unshift(newMessage)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.text;
            return state;
        default: return state;
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