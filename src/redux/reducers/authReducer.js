import {authAPI} from "../../API/api";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'authReducer/GET_CAPTCHA_SUCCESS';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.authorizatedUserData}
        }
        case GET_CAPTCHA_SUCCESS: {
            return {...state, captchaUrl: action.url}
        }
        default:
            return state;
    }

}

export default authReducer;

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA, authorizatedUserData: {
        id, email, login, isAuth
    }
})

export const getCaptchaSuccess = (url) => ({
    type: GET_CAPTCHA_SUCCESS, url
})



export const authMe = () => async (dispatch) => {
    const response = await authAPI.setAuthData()
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const logoutUser = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const loginUser = (email, password, rememberMe,captcha, setStatus) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) {
        dispatch(authMe())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        setStatus(response.data.messages[0])
    }
}
export const getCaptcha = () => async (dispatch) => {
    const response = await authAPI.getCaptcha()
    dispatch(getCaptchaSuccess(response.data.url))
}





