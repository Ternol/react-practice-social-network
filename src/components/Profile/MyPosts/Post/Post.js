import React from 'react'
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdUNllTvwag4LcIRAu9tcb8tgbR_RoaGQSE3_Zv6zS2ewaBC6z9PuJ2bYtfxwCRx7d6U&usqp=CAU"
            alt="user avatar"/>
            {props.message}
            <div><span>Ометок нравится: </span></div> {props.likescount}
        </div>
    )
}

export default Post;