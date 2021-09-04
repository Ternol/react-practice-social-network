import defaultAva from "../../img/defaultAva.png";
import {profileAPI} from "../../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';

const initialState = {
    postsData: [
        {message: 'Сегодня учу props', id: 3, likesCount: 10},
        {message: 'Как дела?', id: 2, likesCount: 14},
        {message: 'Привет всем!', id: 1, likesCount: 21},
    ],
    profile: {
        fullName: 'Алексей Завьялов',
        userId: 777777,
        lookingForAJob: true,
        lookingForAJobDescription: 'Ищу работу react-разработчиком, изучаю js и react около 3 месяцев',
        photos: {
            large: defaultAva
        }
    },
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let messageBody = action.newPostText;
            return {
                ...state,
                postsData: [
                    {message: messageBody, id: 4, likesCount: 0,}, ...state.postsData
                ],
            }
        }

        case SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        case GET_STATUS : {
            return {...state, status: action.status}
        }
        default:
            return state;
    }

}

export default profileReducer;

export const addPost = (newPostText) => ({
    type: ADD_POST, newPostText
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatusToState = (status) => ({
    type: GET_STATUS,
    status
})


export const setProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (status) => (dispatch) => {
   profileAPI.getStatus(status)
       .then(response => {
           dispatch(setStatusToState(response.data))
       })
}
export const updateStatus = (status) => (dispatch) => {
   profileAPI.updateMyStatus(status)
       .then(response => {
           if (response.data.resultCode === 0) {
               dispatch(setStatusToState(status))
           }
       })
}