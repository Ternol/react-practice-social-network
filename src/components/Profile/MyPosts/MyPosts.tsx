import React, {FC, useState} from 'react'
import s from './myPosts.module.css';
import Post from "./Post/Post";
import NewPostForm from "./Post/NewPostForm";
import MyModal from "../../../UI/MyModal/MyModal";
import MyButton from "../../../UI/MyButton/MyButton";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const MyPosts:FC = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const {profile, postsData} = useTypedSelector(state => state.profilePage)
    const authorizedUserId = useTypedSelector(state => state.auth.id)

    const {photos,fullName,userId} = profile

    const postsElements = postsData
        .map(post => <Post userName={fullName}
                           messages={post.message}
                           avatar={photos?.small}
                           key={post.id}/>)


    return (
        <div className={s.myPostsBlock}>
            {userId === authorizedUserId
                ? <div><MyButton onClick={() => setModalVisible(true)}>Create post</MyButton>
                    <div className={s.myModalHeight}>
                        <MyModal visible={modalVisible} setVisible={setModalVisible}>
                            <NewPostForm setVisible={setModalVisible}/>
                        </MyModal>
                    </div>
                </div>
                : null
            }
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;