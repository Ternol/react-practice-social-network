import React from 'react'
import s from './myPosts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {
    const postsElements = props.statePosts.postsData
        .map(post => <Post message={post.message} likescount={post.likesCount} key={post.id}/> )
    const refLinkTextarea = React.createRef();
    const addPost = () => {
        props.addPost(refLinkTextarea.current.value)
    }
    return (
        <div>
            <div>Моя стена</div>
            <div><textarea ref={refLinkTextarea}></textarea></div>
            <div>
                <button onClick={addPost}>Опубликовать</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Myposts;