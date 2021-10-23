import {FilterType} from "../redux/reducers/usersReducer";

export type UserDataType = {
    id: number
    name: string
    status: string | null
    photos: UserDataPhotosType
    followed: boolean
}
export type UserDataPhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    aboutMe: string|null
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: UserDataPhotosType
}

export type contactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}
export enum userReducerActions {
    FOLLOW = 'usersReducer/FOLLOW',
    UNFOLLOW = 'usersReducer/UNFOLLOW',
    SET_USERS = 'usersReducer/SET_USERS',
    SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'usersReducer/SET_TOTAL_USERS_COUNT',
    SET_FILTER = 'usersReducer/SET_FILTER',
    TOGGLE_FOLLOWING_IN_PROGRESS = 'usersReducer/TOGGLE_FOLLOWING_IN_PROGRESS',
    SET_LOADER = 'usersReducer/SET_LOADER'
}

export type FollowSuccessActionType = {
    type: userReducerActions.FOLLOW
    userId: number
}
export type UnFollowSuccessActionType = {
    type: userReducerActions.UNFOLLOW
    userId: number
}

export type SetUsersActionType = {
    type: userReducerActions.SET_USERS
    users: Array<UserDataType>
}

export type SetPageActionType = {
    type: userReducerActions.SET_CURRENT_PAGE
    currentPage: number
}

export type SetTotalUsersCountActionType = {
    type: userReducerActions.SET_TOTAL_USERS_COUNT
    totalCount: number
}





export type SetFilterActionType = {
    type: userReducerActions.SET_FILTER
    filter: FilterType
}

export type ToggleFollowingInProgressActionType = {
    type: userReducerActions.TOGGLE_FOLLOWING_IN_PROGRESS
    userId: number
    bool: boolean
}

export type ShowLoaderActionType = {
    type: userReducerActions.SET_LOADER
    bool: boolean
}

export type userReducerActionsTypes = FollowSuccessActionType | UnFollowSuccessActionType | SetUsersActionType |
    SetPageActionType | SetTotalUsersCountActionType | ToggleFollowingInProgressActionType | ShowLoaderActionType
| SetFilterActionType