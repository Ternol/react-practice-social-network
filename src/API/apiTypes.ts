import {UserDataPhotosType, UserDataType} from "../types/userReducerTypes";

export enum resultCodes {
    Success = 0,
    Error = 1
}

export enum captchaRequired {
    true = 10
}


export type getUsersResponseType = {
    items: Array<UserDataType>,
    totalCount: number,
    error: string
}
export type defaultResponseType = {
    resultCode: resultCodes,
    messages: Array<string>,
    data: any
}

export type uploadPhotoResponseType = {
    resultCode: resultCodes,
    messages: Array<string>,
    data: UserDataPhotosType
}

export type getCaptchaResponseType = {
    url: string
}
export type setAuthDataType = {
    data: {id: number, email: string, login: string},
    resultCode: resultCodes,
    messages: string
}

export type loginResponseType = {
    resultCode: captchaRequired | resultCodes,
    messages: Array<string>,
    data: any
}