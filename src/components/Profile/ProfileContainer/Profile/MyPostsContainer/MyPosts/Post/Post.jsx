import React from 'react'
import s from './Post.module.css';
import defaultAva from './../../../../../../../img/defaultAva.png'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.postAbout}>
                <div className={s.userAva}>
                    <img src={defaultAva} alt="user avatar"/>
                </div>
                <div className={s.userName}>
                    <span>{props.userName}</span>
                </div>
            </div>
            <div className={s.postBody}><span>{props.message}</span>
            </div>
        </div>
    )
}

export default Post;
