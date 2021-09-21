import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'
import changeStatusIcon from './../../../../../img/icons/changeStatus-24.png'

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [tempStatus, setTempStatus] = useState(props.status);

    useEffect(() => {
        setTempStatus(props.status)
    }, [props.status])

    const sendStatus = () => {
        if (tempStatus !== props.status) {
            props.updateStatus(tempStatus)
        }
    }

    return (
        <div className={s.about}>
            <div className={s.value}>{props.name}</div>
            {
                props.userId !== props.authorizatedUserId && !editMode
                    ? <div><span className={s.status}>{props?.status  || '-------'}</span></div>
                    : <div>
                        {!editMode
                            ? <div className={s.statusBlock}>
                                <span className={s.status}>{tempStatus || '-------'}</span>
                                <div className={s.statusSettings} onClick={() => setEditMode(true)}>
                                    <img src={changeStatusIcon} alt="changeStatus"/>
                                </div>
                            </div>
                            : <div className="">
                                <div className={s.statusInput}><input autoFocus
                                          onBlur={() => {
                                              sendStatus()
                                              setEditMode(false)
                                          }
                                          }
                                          onChange={e => setTempStatus(e.target.value)}
                                          type="text"
                                          value={tempStatus}/></div>

                            </div>
                        }</div>


            }
            {/*<div style={{cursor: 'pointer'}}><span onClick={*/}
            {/*    () =>setEditMode(true)*/}
            {/*}>{tempStatus || '-------'}</span></div>*/}
            {/*{editMode &&*/}
            {/*<div className="">*/}
            {/*    <input autoFocus*/}
            {/*           onBlur={()=> {sendStatus()*/}
            {/*            setEditMode(false)}*/}
            {/*           }*/}
            {/*           onChange={e => setTempStatus(e.target.value)}*/}
            {/*           type="text"*/}
            {/*           value={tempStatus}/>*/}

            {/*</div>}*/}

        </div>
    );
};

export default ProfileStatus;