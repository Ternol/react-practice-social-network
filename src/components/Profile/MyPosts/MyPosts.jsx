import React from 'react'
import s from './myPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    const postsElements = props.postsData
        .map(post => <Post message={post.message} likescount={post.likesCount} key={post.id}/>)

    const addPost = () => {
       props.addPost();
    }
    const onPostChange = (event) => {
        const currentText = event.target.value;
        props.onPostChange(currentText);
    }

    return (
        <div>
            <div>Моя стена</div>
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}/></div>
            <div>
                <button onClick={addPost}>Опубликовать</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;