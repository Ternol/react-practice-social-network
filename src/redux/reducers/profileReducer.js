import {profileAPI} from "../../API/api";

const ADD_POST = 'profileReducer/ADD-POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const GET_STATUS = 'profileReducer/GET_STATUS';
const DELETE_POST = 'profileReducer/DELETE_POST'

const initialState = {
    postsData: [
        {message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
                '                                        Quis omnis aliquid unde saepe similique obcaecati eius aspernatur quibusdam.\n' +
                '                                        Dolorem exercitationem ab possimus sed ad est libero tenetur cumque voluptas\n' +
                '                                        voluptatum!', id: 3},
        {message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
                '                                        Quis omnis aliquid unde saepe similique obcaecati eius aspernatur quibusdam.\n' +
                '                                        Dolorem exercitationem ab possimus sed ad est libero tenetur cumque voluptas\n' +
                '                                        voluptatum!', id: 2},
        {message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
                '                                        Quis omnis aliquid unde saepe similique obcaecati eius aspernatur quibusdam.\n' +
                '                                        Dolorem exercitationem ab possimus sed ad est libero tenetur cumque voluptas\n' +
                '                                        voluptatum!', id: 1},
    ],
    profile: {},
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let messageBody = action.newPostText;
            return {
                ...state,
                postsData: [
                    {message: messageBody, id: 4}, ...state.postsData
                ],
            }
        }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
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

export const deletePost = (postId) => ({
    type: DELETE_POST, postId
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatusToState = (status) => ({
    type: GET_STATUS,
    status
})


export const setProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserProfile(userId)

    dispatch(setUserProfile(response.data))

}
export const getStatus = (status) => async (dispatch) => {
    const response = await profileAPI.getStatus(status)
    dispatch(setStatusToState(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateMyStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatusToState(status))
    }

}