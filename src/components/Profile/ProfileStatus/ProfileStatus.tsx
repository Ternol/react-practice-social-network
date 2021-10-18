import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'
import changeStatusIcon from '../../../img/icons/changeStatus-24.png'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {updateStatus} from "../../../redux/reducers/profileReducer";


type PropsType = {
    userId: number
}

const ProfileStatus = (props: PropsType) => {

    const {fullName} = useTypedSelector(state => state.profilePage.profile)
    const status = useTypedSelector(state => state.profilePage.status)
    const authorizedUserId = useTypedSelector(state => state.auth.id)

    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState(false)
    const [tempStatus, setTempStatus] = useState(status)


    useEffect(() => {
        setTempStatus(status)
    }, [status])

    const sendStatus = () => {
        if (tempStatus !== status) {
            dispatch(updateStatus(tempStatus))
        }
    }

    return (
        <div className={s.about}>
            <div className={s.value}>{fullName}</div>
            {
                props.userId !== authorizedUserId && !editMode
                    ? <div><span className={s.status}>{status || '--------'} </span></div>
                    : <div>
                        {!editMode
                            ? <div className={s.statusBlock}>
                                <span className={s.status}>{tempStatus || '-------'}</span>
                                <div className={s.statusSettings} onClick={() => setEditMode(true)}>
                                    <img src={changeStatusIcon} alt="changeStatus"/>
                                </div>
                            </div>
                            : <div className={s.statusInput}><input autoFocus
                                                                    onBlur={() => {
                                                                        sendStatus()
                                                                        setEditMode(false)
                                                                    }
                                                                    }
                                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setTempStatus(e.target.value)}
                                                                    type="text"
                                                                    value={tempStatus}/>
                            </div>
                        }</div>


            }

        </div>
    );
};

export default ProfileStatus;