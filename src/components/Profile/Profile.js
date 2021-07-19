import React from 'react'
import s from './profile.module.css';
import MyPosts from "./MyPosts/Myposts";


const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.back_img}><img
                src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                alt="background"/></div>
            <div className={s.flex_container}>
                <div className={s.user__logo}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdUNllTvwag4LcIRAu9tcb8tgbR_RoaGQSE3_Zv6zS2ewaBC6z9PuJ2bYtfxwCRx7d6U&usqp=CAU"
                        alt="user avatar"/>
                </div>
                <div className={s.user__info}>
                    <p>Алексей Завьялов</p>
                    <p>Дата рождения: 5 сентября</p>
                    <p>Город: Медногорск</p>


                </div>
            </div>
            < MyPosts/>
        </div>
    )
}

export default Profile;