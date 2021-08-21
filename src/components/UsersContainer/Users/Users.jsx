import React, {useEffect} from 'react';
import axios from "axios";
import s from "./users.module.css";
import userPhoto from "../../../img/defaultAva.png";
import Loader from "../../../UI/Loader";

const Users = (props) => {
    useEffect(() => {
        props.showLoader(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users/?page=${props.currentPage}&count=${props.pageSize}`)
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
            `https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items)
                props.showLoader(false)
            })
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
                                alt="user avatar"/>
                            <div className={s.follow__button}>
                                {
                                    u.isFollowed ? <button onClick={() => props.unFollow(u.id)}>Отписаться</button>
                                        : <button onClick={() => props.follow(u.id)}>Подписаться</button>
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