import React from 'react'
import s from './profileInfo.module.css';
import defaultAva from './../../../../../img/defaultAva.png'
import Loader from "../../../../../UI/Loader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader/>
    }
    return <div className={s.flex_container}>
        <div className={s.user__logo}>
            {props.profile?.photos?.large
                ? <img src={props.profile.photos.large} alt="user avatar"/>
                : <img
                    src={defaultAva}
                    alt="user avatar"/>
            }

        </div>
        <div className={s.user__info}>
            <p><span>ID: </span>{props.profile.userId}</p>
            <p><span>Имя: </span>{props.profile.fullName}</p>
            <p><span>Ищет работу: </span>{props.profile?.lookingForAJob ? 'Да' : 'Нет'}</p>
            <p>
                <span>Описание: </span>{props.profile?.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Нет описания'}
            </p>

        </div>
    </div>

}

export default ProfileInfo;