import {authAPI} from "../../API/api";
import {
    authReducerActions, authReducerActionsTypes,
    GetCaptchaSuccessType,
    InitialStateType,
    SetAuthUserDataThunkType
} from "../../types/authReducerTypes";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reduxStore";


const initialState:InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
};


const authReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case authReducerActions.SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        case authReducerActions.GET_CAPTCHA_SUCCESS: {
            return {...state, captchaUrl: action.url}
        }
        default:
            return state;
    }

}

export default authReducer;





export const setAuthUserData = (id:number|null, email:string|null,
                                login:string|null, isAuth:boolean):SetAuthUserDataThunkType => ({
    type: authReducerActions.SET_USER_DATA, payload: {
        id, email, login, isAuth
    }
})



export const getCaptchaSuccess = (url:string):GetCaptchaSuccessType => ({
    type: authReducerActions.GET_CAPTCHA_SUCCESS, url
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, authReducerActionsTypes>
type DispatchType = authReducerActionsTypes

export const authMe = ():ThunkType => async (dispatch:Dispatch<DispatchType>) => {
    const response = await authAPI.setAuthData()
    if (response.resultCode === 0) {
        const {id, login, email} = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const logoutUser = ():ThunkType => async (dispatch:Dispatch<DispatchType>) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export const loginUser =
    (email:string, password:string, rememberMe:boolean,captcha:any, setStatus:any):ThunkType =>
    async (dispatch:any) => {
    const response = await authAPI.login(email, password, rememberMe,captcha)
    if (response.resultCode === 0) {
        dispatch(authMe())
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptcha())
        }
        setStatus(response.messages[0])
    }
}
export const getCaptcha = ():ThunkType => async (dispatch:any) => {
    const response = await authAPI.getCaptcha()
    dispatch(getCaptchaSuccess(response.url))
}





