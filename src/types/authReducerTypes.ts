
export enum authReducerActions {
    SET_USER_DATA='authReducer/SET_USER_DATA',
    GET_CAPTCHA_SUCCESS='authReducer/GET_CAPTCHA_SUCCESS'
}

export type InitialStateType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
    captchaUrl: null | string
}

export type SetAuthUserDataPayloadType = {
    id: number|null
    email: string|null
    login: string|null
    isAuth:boolean
}

export type SetAuthUserDataThunkType = {
    type: authReducerActions.SET_USER_DATA,
    payload: SetAuthUserDataPayloadType
}

export type GetCaptchaSuccessType = {
    type: authReducerActions.GET_CAPTCHA_SUCCESS
    url: string
}

export type authReducerActionsTypes = SetAuthUserDataThunkType | GetCaptchaSuccessType
