import React from 'react'
import s from './myPosts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {
    const postsElements = props.postsdata.map(post =>
        <Post message={post.message} likescount={post.likesCount} key={post.id}/> )

    return (
        <div>
            <div>Моя стена</div>
            <div><textarea></textarea></div>
            <div>
                <button>Опубликовать</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Myposts;