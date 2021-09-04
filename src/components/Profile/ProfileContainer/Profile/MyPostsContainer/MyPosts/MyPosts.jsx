import React from 'react'
import s from './myPosts.module.css';
import Post from "./Post/Post";
import NewPostForm from "./Post/NewPostForm";


const MyPosts = (props) => {
    const postsElements = props.postsData
        .map(post => <Post message={post.message} likescount={post.likesCount} key={post.id}/>)


    return (
        <div>
            <div>Моя стена</div>
            <div>
                <NewPostForm addPost={props.addPost}/>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;