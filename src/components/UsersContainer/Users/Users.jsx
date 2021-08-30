import React, {useEffect} from 'react';
import s from "./users.module.css";
import userPhoto from "../../../img/defaultAva.png";
import Loader from "../../../UI/Loader";
import {useHistory} from 'react-router-dom';
import {usersAPI} from "../../../API/api";
import {changePage} from "../../../redux/reducers/usersReducer";

const Users = (props) => {
    useEffect(() => {
       props.getUsers(props.currentPage, props.pageSize)
    }, [])

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageChanged = (pageNumber) => {
        props.changePage(pageNumber, props.pageSize)
    }
    const router = useHistory();

    const follow = (userId) => {
       props.follow_UnFollow(userId,'f')
    }
    const unFollow = (userId) => {
        props.follow_UnFollow(userId,'uf')
    }


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
                                u.followed ? <button
                                        disabled={props.isFollowingInProgress.some(id => id === u.id)}
                                        onClick={() => unFollow(u.id)}>Отписаться</button>

                                    : <button
                                        disabled={props.isFollowingInProgress.some(id => id === u.id)}
                                        onClick={() => follow(u.id)}>Подписаться</button>
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