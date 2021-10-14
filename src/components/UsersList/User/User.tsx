import React, {FC} from 'react';
import s from './user.module.css';
import userPhoto from "../../../img/defaultAva.png";
import {useHistory} from "react-router-dom";
import {UserDataType} from "../../../types/userReducerTypes";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {follow, unFollow} from "../../../redux/reducers/usersReducer";

type PropsType = {
    user:UserDataType,
}

const User:FC<PropsType> = ({user}) => {
    const isFollowingInProgress = useTypedSelector(state => state.usersPage.isFollowingInProgress)
    const dispatch = useDispatch()
    const router = useHistory();
    return <div className={s.userCard}>
        <div className={s.userFollow}>
            <img
                src={user?.photos?.small ? user.photos.small : userPhoto}
                onClick={() => router.push('/profile/' + user.id)}
                alt="user avatar"/>
            <div className={s.follow__button}>
                {
                    user.followed ? <button
                            disabled={isFollowingInProgress.some(id => id === user.id)}
                            onClick={() => {dispatch(unFollow(user.id))}}>Отписаться</button>

                        : <button
                            disabled={isFollowingInProgress.some(id => id === user.id)}
                            onClick={() => dispatch(follow(user.id))}>Подписаться</button>
                }
            </div>
        </div>
        <div className={s.user}>
            <div className={s.user__description}>
                <span className={s.user__name}>{user.name}</span>
                <span className={s.user__status}>{user.status}</span>
            </div>
        </div>
    </div>

};


export default User;