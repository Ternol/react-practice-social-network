import React from "react";
import s from './users.module.css'
const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, name: 'Брат', isFollowed: true, status: 'Делаю крутые вещи', location: 'Москва'},
            {id: 2, name: 'Илон Маск', isFollowed: true, status: 'Кто со мной на марс?', location: 'Техас'},
            {id: 3, name: 'Александр', isFollowed: false, status: '...', location: 'Киев'},
            {id: 4, name: 'Оксана', isFollowed: false, status: 'Не смотри назад, там грузовик и он знает, что ты боишься', location: 'Екатеринбург'},
        ])
    }
    return <div>
        {props.users.map(u => <div key={u.id} className={s.userCard}>
                <div className={s.userFollow}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdUNllTvwag4LcIRAu9tcb8tgbR_RoaGQSE3_Zv6zS2ewaBC6z9PuJ2bYtfxwCRx7d6U&usqp=CAU"
                        alt="user avatar"/>
                    <div className={s.follow__button}>
                        {
                            u.isFollowed ? <button onClick={() =>props.unFollow(u.id)}>Отписаться</button>
                                : <button onClick={() =>props.follow(u.id)}>Подписаться</button>
                        }
                    </div>
                </div>
                <div className={s.user}>
                    <div className={s.user__description}>
                        <span className={s.user__name}>{u.name}</span>
                        <span className={s.user__status}>{u.status}</span>
                    </div>
                    <div className={s.user__location}>{u.location}</div>
                </div>
            </div>
        )
        }
    </div>;
}

export default Users;