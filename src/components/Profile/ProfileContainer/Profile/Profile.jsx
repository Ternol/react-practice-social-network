import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPostsContainer/MyPostsContainer";
import ProfileStatus from "./ProfileStatus";

const Profile = (props) => {
    return (
        <div>
            < ProfileInfo profile={props.profile}/>
            < ProfileStatus status={props.status} updateStatus={props.updateStatus} userId={props.userId}/>
            < MyPostsContainer />
        </div>
    )
}

export default Profile;