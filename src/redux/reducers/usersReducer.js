const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
    usersData: [],
    pageSize: 100,
    totalUsersCount: 1000,
    currentPage: 1
}


const usersReducer = (state=initialState, action) => {
    switch (action.type) {

        case FOLLOW : {
            return {
                ...state,
            usersData: state.usersData.map((u) => {
                if (u.id === action.userId) {
                  return  {...u, isFollowed: true}
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
                    return {...u, isFollowed: false}
                }
                    return u
            })
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

export const followAC = (userId) => ({type: FOLLOW, userId});

export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})


