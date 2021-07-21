import React from 'react'
import s from './profile.module.css';
import MyPosts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div>
            < ProfileInfo/>
            < MyPosts/>
        </div>
    )
}

export default Profile;