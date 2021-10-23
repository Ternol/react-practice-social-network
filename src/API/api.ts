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

    async getFilteredUsers(pageNumber = 1, pageSize = 20,
                           term: string = '',friend: null| boolean = null) {
        let response = await instance.get<getUsersResponseType>
        (`users/?page=${pageNumber}&count=${pageSize}${term ? `&term=${term}` : ''}${friend ? `&friend=${friend}` : ''}`);
        if (response.status === 200) return response.data
    },

    async changePage(pageNumber: number, pageSize = 100) {
        const response = await instance.get<getUsersResponseType>(`users/?page=${pageNumber}&count=${pageSize}`);
        if (response.status === 200)
            return response.data;
    },

    async unFollowUser(userId: number) {
        const response = await instance.delete<defaultResponseType>(`follow/${userId}`);
        if (response.status === 200)
            return response.data;
    },
    async followUser(userId: number) {
        const response = await instance.post<defaultResponseType>(`/follow/${userId}`);
        if (response.status === 200)
            return response.data;
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
    async getStatus(userId: number) {
        const response = await instance.get<string>(`profile/status/${userId}`);
        if (response.status === 200) {
            return response.data;
        }
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
    async setAuthData() {
        const response = await instance.get<setAuthDataType>('auth/me');
        if (response.status === 200)
            return response.data;
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



