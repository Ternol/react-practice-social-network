import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : '550aa669-3f14-48fe-b02d-002a7281fe06'
    }
})


export const usersAPI = {
    getUsers(pageNumber=1,pageSize=100){
        return instance(`users/?page=${pageNumber}&count=${pageSize}`)
            .then(response => {if (response.status === 200) return response.data})},

    changePage(pageNumber,pageSize=100){
        return instance(`users/?page=${pageNumber}&count=${pageSize}`)
            .then(response => {if (response.status === 200) return response.data})},

    unFollowUser(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    },
    followUser(userId){
        return instance.post(`/follow/${userId}`)
            .then(response => {
                if (response.status === 200) return response.data
            })
    }

}

