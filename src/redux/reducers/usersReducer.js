import {usersAPI} from "../../API/api";
import {updateObjectInArray} from "../../utils/object-helpers";

const FOLLOW = 'usersReducer/FOLLOW';
const UNFOLLOW = 'usersReducer/UNFOLLOW';
const SET_USERS = 'usersReducer/SET_USERS';
const SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'usersReducer/TOGGLE_FOLLOWING_IN_PROGRESS'
const SET_LOADER = 'usersReducer/SET_LOADER'


const initialState = {
    usersData: [],
    pageSize: 100,
    totalUsersCount: 1000,
    currentPage: 1,
    isFollowingInProgress: [],
    isLoading: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW : {
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId,"id",
                    {followed:true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId,"id",
                    {followed:false})
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state, isFollowingInProgress:
                    action.bool
                        ? [...state.isFollowingInProgress, action.userId]
                        : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        }

        case SET_USERS: {
            return {
                ...state, usersData: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case SET_LOADER:
            return {
                ...state, isLoading: action.bool
            }


        default:
            return state;
    }
}

export default usersReducer;

export const followSuccess = (userId) => ({type: FOLLOW, userId});

export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})

export const toggleFollowingInProgress = (bool, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, bool, userId})

export const showLoader = (bool) => ({type: SET_LOADER, bool})

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(showLoader(true))
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(showLoader(false))
}

export const changePage = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(showLoader(true))
    dispatch(setPage(pageNumber))
    const response = await usersAPI.changePage(pageNumber, pageSize)
    dispatch(setUsers(response.items));
    dispatch(showLoader(false))
}
export const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch,userId,usersAPI.followUser.bind(usersAPI),followSuccess)
    }
}
export const unFollow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch,userId,usersAPI.unFollowUser.bind(usersAPI),unFollowSuccess)
    }
}



