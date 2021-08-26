import React, {useEffect} from 'react'
import Profile from "./Profile/Profile";
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/reducers/profileReducer";
import {fetching} from "../../../utils/fetching";


const ProfileContainer = (props) => {

    const userId = useParams()

    useEffect(() => {
        fetching(`https://social-network.samuraijs.com/api/1.0/profile/${userId.id}`,
            `Не удалось получить данные пользователя id: ${userId.id}`)
            .then(response => {
                props.setUserProfile(response.data)
            })


    }, [])
    return <Profile {...props}/>
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

