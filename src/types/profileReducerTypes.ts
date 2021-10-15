import {ProfileType, UserDataPhotosType} from "./userReducerTypes";

export enum ProfileReducerActions {
    ADD_POST='profileReducer/ADD-POST',
    SET_USER_PROFILE='profileReducer/SET_USER_PROFILE',
    GET_STATUS='profileReducer/GET_STATUS',
    DELETE_POST='profileReducer/DELETE_POST',
    SET_PHOTOS='profileReducer/SET_PHOTOS'
}

export type InitialStateType = {
    postsData: Array<PostsDataStateType>
    profile: ProfileType,
    status: string
}

type PostsDataStateType = {
    message: string,
    id: number
}

export type AddPostActionType = {
    type: ProfileReducerActions.ADD_POST
    newPostText: string
}

export type DeletePostActionType = {
    type: ProfileReducerActions.DELETE_POST,
    postId: number
}

export type SetUserProfileActionType = {
    type: ProfileReducerActions.SET_USER_PROFILE,
    profile: ProfileType
}

export type SetStatusToStateActionType = {
    type: ProfileReducerActions.GET_STATUS,
    status: string
}
export type SetPhotosToStateActionType = {
    type: ProfileReducerActions.SET_PHOTOS,
    photos: UserDataPhotosType
}

export type ProfileReducerActionsTypes = AddPostActionType | DeletePostActionType | SetUserProfileActionType |
    SetStatusToStateActionType | SetPhotosToStateActionType
