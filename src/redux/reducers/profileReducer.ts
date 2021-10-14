import {profileAPI} from "../../API/api";
import {ProfileType, UserDataPhotosType} from "../../types/userReducerTypes";

const ADD_POST = 'profileReducer/ADD-POST';
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE';
const GET_STATUS = 'profileReducer/GET_STATUS';
const DELETE_POST = 'profileReducer/DELETE_POST';
const SET_PHOTOS = 'profileReducer/SET_PHOTOS';
export type InitialStateType = {
    postsData: Array<PostsDataStateType>
    profile: ProfileType,
    status: string
}


type PostsDataStateType = {
    message: string,
    id: number
}
const initialState: InitialStateType = {
    postsData: [
        {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
                '                                        Quis omnis aliquid unde saepe similique obcaecati eius aspernatur quibusdam.\n' +
                '                                        Dolorem exercitationem ab possimus sed ad est libero tenetur cumque voluptas\n' +
                '                                        voluptatum!', id: 3
        },
        {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
                '                                        Quis omnis aliquid unde saepe similique obcaecati eius aspernatur quibusdam.\n' +
                '                                        Dolorem exercitationem ab possimus sed ad est libero tenetur cumque voluptas\n' +
                '                                        voluptatum!', id: 2
        },
        {
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
                '                                        Quis omnis aliquid unde saepe similique obcaecati eius aspernatur quibusdam.\n' +
                '                                        Dolorem exercitationem ab possimus sed ad est libero tenetur cumque voluptas\n' +
                '                                        voluptatum!', id: 1
        },
    ],
    profile: {} as ProfileType,
    status: ''
}
const profileReducer = (state = initialState, action: any): InitialStateType => {
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
        case SET_PHOTOS : {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        default:
            return state;
    }

}

export default profileReducer;

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({
    type: ADD_POST, newPostText
})

type DeletePostActionType = {
    type: typeof DELETE_POST,
    postId: number
}

export const deletePost = (postId: number): DeletePostActionType => ({
    type: DELETE_POST, postId
})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile
})
type SetStatusToStateActionType = {
    type: typeof GET_STATUS,
    status: string
}

export const setStatusToState = (status: string): SetStatusToStateActionType => ({
    type: GET_STATUS,
    status
})

type SetPhotosToStateActionType = {
    type: typeof SET_PHOTOS,
    photos: UserDataPhotosType
}


export const setPhotosToState = (photos: UserDataPhotosType): SetPhotosToStateActionType => ({
    type: SET_PHOTOS,
    photos
})


export const setProfile = (userId: number) => async (dispatch: any) => {
    const response: any = await profileAPI.getUserProfile(userId)

    dispatch(setUserProfile(response.data))

}
export const getStatus = (status: string) => async (dispatch: any) => {
    const response: any = await profileAPI.getStatus(status)
    dispatch(setStatusToState(response.data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateMyStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatusToState(status))
    }

}
export const uploadPhoto = (photo: object) => async (dispatch: any) => {
    const response = await profileAPI.uploadPhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(setPhotosToState(response.data.data.photos))
    }

}