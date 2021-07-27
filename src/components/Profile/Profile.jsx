import React from 'react'
import s from './profile.module.css';
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            < ProfileInfo/>
            < Myposts statePosts={props.statePosts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;