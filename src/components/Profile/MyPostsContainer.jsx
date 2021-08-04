import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducers/profileReducer";


const MyPostsContainer = (props) => {
    const state = props.store.getState().postsPage;
    const onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return <MyPosts postsData={state.postsData} addPost={onAddPost} onPostChange={onPostChange} newPostText={state.newPostText}/>
}

export default MyPostsContainer;