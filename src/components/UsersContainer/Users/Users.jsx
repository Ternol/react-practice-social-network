import React, {useEffect} from 'react';
import axios from "axios";
import s from "./users.module.css";
import userPhoto from "../../../img/defaultAva.png";
import Loader from "../../../UI/Loader";
import {useHistory} from 'react-router-dom';

const Users = (props) => {
    useEffect(() => {
        props.showLoader(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users/?page=${props.currentPage}&count=${props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                props.setUsers(response.data.items);
                props.setTotalUsersCount(response.data.totalCount);
                props.showLoader(false)
            });
    }, [])

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageChanged = (pageNumber) => {
        props.showLoader(true)
        props.setCurrentPage(pageNumber)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                props.setUsers(response.data.items)
                props.showLoader(false)
            })
    }
    const router = useHistory();
    return (
        <div>

            <div className={s.wrap}>
                {pages.map(p => <span key={p}
                                      style={{padding: 4, cursor: 'pointer'}}
                                      className={props.currentPage === p ? s.selectedPage : s.page}
                                      onClick={() => onPageChanged(p)}>{p}</span>)}
            </div>

            {props.isLoading
                ? <Loader/>
                : <div>{props.users.map(u => <div key={u.id} className={s.userCard}>
                    <div className={s.userFollow}>
                        <img
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                            onClick={() => router.push('/profile/' + u.id)}
                            alt="user avatar"/>
                        <div className={s.follow__button}>
                            {
                                u.followed ? <button onClick={() =>
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY" : "550aa669-3f14-48fe-b02d-002a7281fe06"
                                                }
                                            }).then(response => {
                                            if (response.data.resultCode === 0) props.unFollow(u.id)
                                        })}>Отписаться</button>

                                    : <button onClick={() =>
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY" : "550aa669-3f14-48fe-b02d-002a7281fe06"
                                                }
                                            }).then(response => {
                                            if (response.data.resultCode === 0) props.follow(u.id)
                                        })
                                    }>Подписаться</button>
                            }
                        </div>
                    </div>
                    <div className={s.user}>
                        <div className={s.user__description}>
                            <span className={s.user__name}>{u.name}</span>
                            <span className={s.user__status}>{u.status}</span>
                        </div>
                        <div className={s.user__location}>{u.location = 'Не указано'}</div>
                    </div>
                </div>)}
                </div>

            }


        </div>
    )
}

export default Users;