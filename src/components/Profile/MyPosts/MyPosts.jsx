import React from 'react'
import s from './myPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {
    const postsElements = props.statePosts.postsData
        .map(post => <Post message={post.message} likescount={post.likesCount} key={post.id}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = (event) => {
        const currentText = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(currentText))
    }

    return (
        <div>
            <div>Моя стена</div>
            <div>
                <textarea onChange={onPostChange}
                          value={props.statePosts.newPostText}/></div>
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