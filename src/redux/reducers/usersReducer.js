const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

const initialState = {
    usersData: [],
    pageSize: 100,
    totalUsersCount: 1000,
    currentPage: 1,
    isFollowingInProgress: []
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


        default: return state;
    }
}

export default usersReducer;

export const follow = (userId) => ({type: FOLLOW, userId});

export const unFollow = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})

export const toggleFollowingInProgress = (bool, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, bool, userId})


