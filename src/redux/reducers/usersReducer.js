const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


const initialState = {
    usersData: [
        // {id: 1, name: 'Брат', isFollowed: true, status: 'Делаю крутые вещи', location: 'Москва'},
        // {id: 2, name: 'Илон Маск', isFollowed: true, status: 'Кто со мной на марс?', location: 'Техас'},
        // {id: 3, name: 'Александр', isFollowed: false, status: '...', location: 'Киев'},
        // {id: 4, name: 'Оксана', isFollowed: false, status: 'Не смотри назад, там грузовик и он знает, что ты боишься', location: 'Екатеринбург'},
    ]
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
                ...state, usersData: [...state.usersData, ...action.users]
            }
        }
        default: return state;
    }
}

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId});

export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});

