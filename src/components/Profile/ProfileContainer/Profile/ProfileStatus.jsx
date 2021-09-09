import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [tempStatus, setTempStatus] = useState(props.status);

    useEffect(()=> {
        setTempStatus(props.status)
    }, [props.status])

    const sendStatus = () => {
        if (tempStatus !== props.status){
            props.updateStatus(tempStatus)
        }
    }

    return (
        <div>{
            props.userId !== props.authorizatedUserId && !editMode
                ? <div><span>{props.status}</span></div>
                : <div style={{cursor: 'pointer'}}><span onClick={
                    () =>setEditMode(true)
                }>{tempStatus || '-------'}</span></div>
        }
        
            {editMode &&
            <div className="">
                <input autoFocus
                       onBlur={()=> {sendStatus()
                        setEditMode(false)}
                       }
                       onChange={e => setTempStatus(e.target.value)}
                       type="text"
                       value={tempStatus}/>

            </div>}

        </div>
    );
};

export default ProfileStatus;