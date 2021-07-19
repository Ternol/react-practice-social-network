import React from 'react'
import s from './myPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>Моя стена</div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Опубликовать</button>
            <div className={s.posts}>
                < Post message = "Сегодня учу props" likescount="10"/>
                < Post message = "Привет всем! Как дела?" likescount="14"/>
                < Post message = "Это мой первый пост" likescount="21"/>
            </div>
        </div>
    )
}

export default MyPosts;