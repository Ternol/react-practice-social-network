import React from 'react'
import s from './profile.module.css';
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            < ProfileInfo/>
            < Myposts postsdata={props.postData}/>
        </div>
    )
}

export default Profile;