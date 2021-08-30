import {usersAPI} from "../../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'
const SET_LOADER = 'SET_LOADER'


const initialState = {
    usersData: [],
    pageSize: 100,
    totalUsersCount: 1000,
    currentPage: 1,
    isFollowingInProgress: [],
    isLoading: false,
}


const usersReducer = (state=initialState, action) => {
    switch (action.type) {

        case FOLLOW : {
            return {
                ...state,
            usersData: state.usersData.map((u) => {
                if (u.id === action.userId) {
                  return  {...u, followed: true}
                }
                    return u
            })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
            usersData: state.usersData.map((u) => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                    return u
            })
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {...state, isFollowingInProgress:
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


        default: return state;
    }
}

export default usersReducer;

export const followSuccess = (userId) => ({type: FOLLOW, userId});

export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})

export const toggleFollowingInProgress = (bool, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, bool, userId})

export const showLoader = (bool) => ({type: SET_LOADER, bool})

export const getUsers = (currentPage,pageSize) => {
   return (dispatch) => {
        dispatch(showLoader(true))
        usersAPI.getUsers(currentPage,pageSize)
            .then(response => {
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
                dispatch(showLoader(false))
            })

}
}
export const changePage = (pageNumber,pageSize) => {
   return (dispatch) => {
        dispatch(showLoader(true))
        dispatch(setCurrentPage(pageNumber))
        usersAPI.changePage(pageNumber,pageSize)
            .then(response => {
                dispatch(setUsers(response.items));
                dispatch(showLoader(false))
            })
}
}

export const follow_UnFollow = (userId, follow_unfollowToggle) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    switch (follow_unfollowToggle) {
        case 'f':  {
            return usersAPI.followUser(userId)
            .then(response => {
                if (response.resultCode === 0){
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })}
        case 'uf': {
                return usersAPI.unFollowUser(userId)
                    .then(response => {
                        if (response.resultCode === 0){
                            dispatch(unFollowSuccess(userId))
                        }
                        dispatch(toggleFollowingInProgress(false, userId))
                    })}

        default: return  alert('В колбэке передаются неверные данные')
    }
}


