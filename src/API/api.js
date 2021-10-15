import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '550aa669-3f14-48fe-b02d-002a7281fe06'
    }
})


export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 100) {
        return instance(`users/?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    },

    changePage(pageNumber, pageSize = 100) {
        return instance(`users/?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    },

    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    },
    followUser(userId) {
        return instance.post(`/follow/${userId}`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    }

}

export const profileAPI = {
    getUserProfile(userId, message = `Не удалось получить данные пользователя id: ${userId}`) {
        try {
            return instance(`profile/${userId}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.data
                    }
                })
        } catch {
            alert(message)
        }
    },
    getStatus(userId) {
        return instance('profile/status/' + userId).then(response => {
            if (response.status === 200) {
                return response.data
            }
        })
    },
    updateMyStatus(status) {
        return instance.put('profile/status/', {status})
    },
    uploadPhoto(photoFile) {
        const formData = new FormData();
        formData.append('image',photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    },
}


export const authAPI = {
    setAuthData() {
        return instance('auth/me')
            .then(response => {
                if (response.status === 200) return response.data
            })
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => {
                if(response.status === 200) return response.data
            })
    },
    login(email, password, rememberMe=false,captcha=null) {

        return instance.post('auth/login', {
            email, password, rememberMe,captcha
        })
            .then(response => {
            if(response.status === 200) return response.data
            })
    },
    getCaptcha() {
        return instance('security/get-captcha-url').then(
            response => {
                if (response.status === 200) return response.data
            }
        )
    }
}



