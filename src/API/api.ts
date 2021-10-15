import axios from "axios";
import {ProfileType} from "../types/userReducerTypes";
import {
    defaultResponseType,
    getCaptchaResponseType,
    getUsersResponseType, loginResponseType,
    setAuthDataType,
    uploadPhotoResponseType
} from "./apiTypes";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '550aa669-3f14-48fe-b02d-002a7281fe06'
    }
})




export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 100) {
        return instance.get<getUsersResponseType>(`users/?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    },

    changePage(pageNumber:number, pageSize = 100) {
        return instance.get<getUsersResponseType>(`users/?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    },

    unFollowUser(userId:number) {
        return instance.delete<defaultResponseType>(`follow/${userId}`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    },
    followUser(userId:number) {
        return instance.post<defaultResponseType>(`/follow/${userId}`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    }

}


export const profileAPI = {
    getUserProfile(userId:number, message = `Не удалось получить данные пользователя id: ${userId}`) {
        try {
            return instance.get<ProfileType>(`profile/${userId}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.data
                    }
                })
        } catch {
            alert(message)
        }
    },
    getStatus(userId:number) {
        return instance.get<string>(`profile/status/${userId}`).then(response => {
            if (response.status === 200) {
                return response.data
            }
        })
    },
    updateMyStatus(status:string) {
        return instance.put<defaultResponseType>('profile/status/', {status})
    },
    uploadPhoto(photoFile:any) {
        const formData = new FormData();
        formData.append('image',photoFile)
        return instance.put<uploadPhotoResponseType>('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    },
}



export const authAPI = {
    setAuthData() {
        return instance.get<setAuthDataType>('auth/me')
            .then(response => {
                if (response.status === 200) return response.data
            })
    },
    logout() {
        return instance.delete<defaultResponseType>('auth/login')
            .then(response => {
                if(response.status === 200) return response.data
            })
    },
    login(email:string, password:string, rememberMe=false,captcha=null) {

        return instance.post<loginResponseType>('auth/login', {
            email, password, rememberMe,captcha
        })
            .then(response => {
            if(response.status === 200) return response.data
            })
    },
    getCaptcha() {
        return instance.get<getCaptchaResponseType>('security/get-captcha-url').then(
            response => {
                if (response.status === 200) return response.data
            }
        )
    }
}



