import React, {FC, useEffect} from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getStatus, setProfile} from "../../redux/reducers/profileReducer";


const Profile:FC = () => {

    const authorizedUserId = useTypedSelector(state => state.auth.id)

    const userIdObj : any = useParams()


    if (!userIdObj.id) {
        userIdObj.id = authorizedUserId
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProfile(userIdObj.id))
        dispatch(getStatus(userIdObj.id))
    }, [userIdObj.id,dispatch])


    const profile = useTypedSelector(state => state.profilePage.profile)

    return (
        <div className={s.profile}>
            <div className={s.profileCard}>< ProfileInfo profile={profile}
                                                         userId={userIdObj.id}
                                                         authorizedUserId={authorizedUserId}
                                                        />
            </div>
            <div className={s.profileBody}>
             < ProfileStatus userId={userIdObj.id} />
                < MyPosts />
            </div>
        </div>
    )
}

export default Profile;