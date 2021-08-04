import s from './sidebarFriends.module.css';
import Friend from "./Friend/Friend";
import React from "react";

const sidebarFriends = (props) => {

    const friendsElements = props.myFriends
        .map((friend) => <Friend name={friend.name} key={friend.id}/>)
    return (<div>
            <div className={s.flexContainer}>
            <span className={s.title}>Мои друзья</span>
            <div className={s.container}>
                {friendsElements}
            </div>
            </div>
        </div>
    )
}
export default sidebarFriends;