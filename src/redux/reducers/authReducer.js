import {authAPI} from "../../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.authorizatedUserData}
        }
        default:
            return state;
    }

}

export const setAuthUserData = (id,email,login,isAuth) => ({
    type: SET_USER_DATA, authorizatedUserData: {
        id,email,login,isAuth
    }
})


export default authReducer;

export const authMe = () => (dispatch) => {
    return authAPI.setAuthData()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id,login,email} = response.data.data
                dispatch(setAuthUserData(id,email,login,true))
            }
        })
}

export const logoutUser = () => (dispatch) => {
    return authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false))
            }
        })
}
export const loginUser = (email,password,rememberMe, setStatus) => (dispatch) => {
    return authAPI.login(email,password,rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authMe())
            } else {
                setStatus(response.data.messages)
            }
        })
}





