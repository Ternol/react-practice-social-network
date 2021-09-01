import React, {useEffect} from 'react'
import Profile from "./Profile/Profile";
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";
import {getStatus, setProfile, updateStatus} from "../../../redux/reducers/profileReducer";

const ProfileContainer = (props) => {

    const userId = useParams()
    if (!userId.id) {
        userId.id = 19324
    }
    useEffect(() => {
        props.setProfile(userId.id)
        props.getStatus(userId.id)
    }, [userId.id])
    return <Profile {...props} userId={userId.id}/>
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default connect(mapStateToProps, {setProfile, getStatus,updateStatus})(ProfileContainer)

