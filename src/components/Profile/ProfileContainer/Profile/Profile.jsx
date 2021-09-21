import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPostsContainer/MyPostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import s from './Profile.module.css';
const Profile = (props) => {
    return (
        <div className={s.profile}>
            < ProfileInfo profile={props.profile}/>
            <div className={s.profileBody}>< ProfileStatus status={props.status}
                               name={props.profile.fullName}
                               updateStatus={props.updateStatus}
                               userId={props.userId}
                               authorizatedUserId={props.authorizatedUserId}
            />
                < MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile;