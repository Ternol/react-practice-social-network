import {profileAPI} from "../../API/api";
import {ProfileType, UserDataPhotosType} from "../../types/userReducerTypes";
import {
    AddPostActionType,
    DeletePostActionType,
    InitialStateType,
    ProfileReducerActions,
    ProfileReducerActionsTypes,
    SetPhotosToStateActionType,
    SetStatusToStateActionType,
    SetUserProfileActionType
} from "../../types/profileReducerTypes";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reduxStore";

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
const profileReducer = (state = initialState, action: ProfileReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case ProfileReducerActions.ADD_POST : {
            let messageBody = action.newPostText;
            return {
                ...state,
                postsData: [
                    {message: messageBody, id: 4}, ...state.postsData
                ],
            }
        }
        case ProfileReducerActions.DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }

        case ProfileReducerActions.SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        case ProfileReducerActions.GET_STATUS : {
            return {...state, status: action.status}
        }
        case ProfileReducerActions.SET_PHOTOS : {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        default:
            return state;
    }

}

export default profileReducer;


export const addPost = (newPostText: string): AddPostActionType => ({
    type: ProfileReducerActions.ADD_POST, newPostText
})

export const deletePost = (postId: number): DeletePostActionType => ({
    type: ProfileReducerActions.DELETE_POST, postId
})

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
    type: ProfileReducerActions.SET_USER_PROFILE,
    profile
})

export const setStatusToState = (status: string): SetStatusToStateActionType => ({
    type: ProfileReducerActions.GET_STATUS,
    status
})

export const setPhotosToState = (photos: UserDataPhotosType): SetPhotosToStateActionType => ({
    type: ProfileReducerActions.SET_PHOTOS,
    photos
})

type DispatchType = ProfileReducerActionsTypes
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileReducerActionsTypes>

export const setProfile = (userId: number):ThunkType => async (dispatch: Dispatch<DispatchType>) => {
    const response= await profileAPI.getUserProfile(userId)

    dispatch(setUserProfile(response))

}
export const getStatus = (status: string):ThunkType => async (dispatch: Dispatch<DispatchType>) => {
    const response = await profileAPI.getStatus(status)
    dispatch(setStatusToState(response))
}
export const updateStatus = (status: string):ThunkType => async (dispatch: Dispatch<DispatchType>) => {
    const response = await profileAPI.updateMyStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatusToState(status))
    }

}
export const uploadPhoto = (photo: object):ThunkType => async (dispatch: Dispatch<DispatchType>) => {
    const response = await profileAPI.uploadPhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(setPhotosToState(response.data.data.photos))
    }

}