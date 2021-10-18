import React from 'react'
import s from './Post.module.css';
import defaultAva from '../../../../img/defaultAva.png'


type PropsType = {
    avatar: string | null,
    userName: string,
    messages: string
}

const Post = (props:PropsType) => {

    const userAvatar = props.avatar ? props.avatar : defaultAva

    return (
        <div className={s.post}>
            <div className={s.postAbout}>
                <div className={s.userAva}>
                    <img src={userAvatar} alt="user avatar"/>
                </div>
                <div className={s.userName}>
                    <span>{props.userName}</span>
                </div>
            </div>
            <div className={s.postBody}><span>{props.messages}</span>
            </div>
        </div>
    )
}

export default Post;
