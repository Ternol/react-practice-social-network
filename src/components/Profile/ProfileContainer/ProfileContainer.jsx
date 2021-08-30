import React, {useEffect} from 'react'
import Profile from "./Profile/Profile";
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";
import {setProfile} from "../../../redux/reducers/profileReducer";

const ProfileContainer = (props) => {

    const userId = useParams()
    if (!userId.id) {
        userId.id = 19324
    }
    useEffect(() => {
        props.setProfile(userId.id)
    }, [userId.id])
    return <Profile {...props}/>
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setProfile})(ProfileContainer)

