import {usersAPI} from "../../API/api";
import {
    FollowSuccessActionType,
    SetPageActionType,
    SetTotalUsersCountActionType,
    SetUsersActionType,
    ShowLoaderActionType,
    ToggleFollowingInProgressActionType,
    UnFollowSuccessActionType,
    UserDataType,
    userReducerActions,
    userReducerActionsTypes
} from "../../types/userReducerTypes";
import {updateObjectInArray} from "../../utils/object-helpers";
import {Dispatch} from "redux";
import { ThunkAction } from "redux-thunk";
import {AppStateType} from "../reduxStore";
import {resultCodes} from "../../API/apiTypes";

export type InitialStateType = {
    usersData: Array<UserDataType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFollowingInProgress: Array<number>// array of userId
    isLoading: boolean
}

const initialState:InitialStateType = {
    usersData: [] as Array<UserDataType>,
    pageSize: 100,
    totalUsersCount: 1000,
    currentPage: 1,
    isFollowingInProgress: [] as Array<number>,
    isLoading: false,
}

const usersReducer = (state = initialState, action:userReducerActionsTypes) => {
    switch (action.type) {

        case userReducerActions.FOLLOW : {
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId,"id",
                    {followed:true})
            }
        }
        case userReducerActions.UNFOLLOW: {
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId,"id",
                    {followed:false})
            }
        }
        case userReducerActions.TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state, isFollowingInProgress:
                    action.bool
                        ? [...state.isFollowingInProgress, action.userId]
                        : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        }

        case userReducerActions.SET_USERS: {
            return {
                ...state, usersData: action.users
            }
        }
        case userReducerActions.SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case userReducerActions.SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case userReducerActions.SET_LOADER:
            return {
                ...state, isLoading: action.bool
            }


        default:
            return state;
    }
}

export default usersReducer;



export const followSuccess = (userId:number):FollowSuccessActionType =>
    ({type: userReducerActions.FOLLOW, userId});

export const unFollowSuccess = (userId:number):UnFollowSuccessActionType =>
    ({type: userReducerActions.UNFOLLOW, userId});

export const setUsers = (users:Array<UserDataType>):SetUsersActionType =>
    ({type: userReducerActions.SET_USERS, users});

export const setPage = (currentPage:number):SetPageActionType =>
    ({type: userReducerActions.SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalCount:number):SetTotalUsersCountActionType =>
    ({type: userReducerActions.SET_TOTAL_USERS_COUNT, totalCount})


export const toggleFollowingInProgress =
    (bool: boolean, userId:number): ToggleFollowingInProgressActionType =>
    ({type: userReducerActions.TOGGLE_FOLLOWING_IN_PROGRESS, bool, userId})


export const showLoader = (bool:boolean):ShowLoaderActionType =>
    ({type: userReducerActions.SET_LOADER, bool})

type DispatchType = Dispatch<userReducerActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, userReducerActionsTypes>


export const getUsers = (currentPage:number, pageSize:number,
                         term?: string | null, friend?:null | string):ThunkType => async (dispatch:DispatchType) => {
    dispatch(showLoader(true))
    const response = await usersAPI.getFilteredUsers(currentPage, pageSize, term, friend)
    if (response) {
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    }
    dispatch(showLoader(false))
}

export const changePage = (pageNumber:number, pageSize?:number):ThunkType => async (dispatch:DispatchType) => {
    dispatch(showLoader(true))
    dispatch(setPage(pageNumber))
    const response = await usersAPI.changePage(pageNumber, pageSize)
    if (response) {
        dispatch(setUsers(response.items));
    }
    dispatch(showLoader(false))
}
const _followUnfollowFlow = async (dispatch:DispatchType, userId:number,
                                   apiMethod:any, actionCreator:any) => {
    dispatch(toggleFollowingInProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.resultCode === resultCodes.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId:number):ThunkType => {
    return async (dispatch:DispatchType) => {
        await _followUnfollowFlow(dispatch,userId,usersAPI.followUser.bind(usersAPI),followSuccess)
    }
}
export const unFollow = (userId:number):ThunkType => {
    return async (dispatch:DispatchType) => {
        await _followUnfollowFlow(dispatch,userId,usersAPI.unFollowUser.bind(usersAPI),unFollowSuccess)
    }
}



