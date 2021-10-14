import {authAPI} from "../../API/api";

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'authReducer/GET_CAPTCHA_SUCCESS';
export type InitialStateType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
    captchaUrl: null | string
}
const initialState:InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
};


const authReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        case GET_CAPTCHA_SUCCESS: {
            return {...state, captchaUrl: action.url}
        }
        default:
            return state;
    }

}

export default authReducer;

type SetAuthUserDataPayloadType = {
    id: number|null
    email: string|null
    login: string|null
    isAuth:boolean
}


type SetAuthUserDataThunkType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataPayloadType
}

export const setAuthUserData = (id:number|null, email:string|null, login:string|null, isAuth:boolean):SetAuthUserDataThunkType => ({
    type: SET_USER_DATA, payload: {
        id, email, login, isAuth
    }
})

type GetCaptchaSuccessType = {
    type: typeof GET_CAPTCHA_SUCCESS
    url: string
}

export const getCaptchaSuccess = (url:string):GetCaptchaSuccessType => ({
    type: GET_CAPTCHA_SUCCESS, url
})



export const authMe = () => async (dispatch:any) => {
    const response:any = await authAPI.setAuthData()
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const logoutUser = () => async (dispatch:any) => {
    const response:any = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const loginUser = (email:string, password:string,
                          rememberMe:boolean,captcha:any, setStatus:any) => async (dispatch:any) => {
    const response:any = await authAPI.login(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) {
        dispatch(authMe())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        setStatus(response.data.messages[0])
    }
}
export const getCaptcha = () => async (dispatch:any) => {
    const response:any = await authAPI.getCaptcha()
    dispatch(getCaptchaSuccess(response.data.url))
}





