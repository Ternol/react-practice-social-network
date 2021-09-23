import React, {useState} from 'react'
import s from './myPosts.module.css';
import Post from "./Post/Post";
import NewPostForm from "./Post/NewPostForm";
import MyModal from "../../../../../../UI/MyModal/MyModal";
import MyButton from "../../../../../../UI/MyButton/MyButton";

const MyPosts = (props) => {
    const [modalVisible,setModalVisible] = useState(false)

    const postsElements = props.postsData
        .map(post => <Post userName={props.userName} message={post.message} likescount={post.likesCount} key={post.id}/>)


    return (
        <div className={s.myPostsBlock}>
            {props.userId === props.authorizedUserId
                ? <div><MyButton onClick={() => setModalVisible(true)}>Create post</MyButton>
                    <MyModal style={{maxHeight: '400px'}} visible={modalVisible} setVisible={setModalVisible}>
                        <NewPostForm addPost={props.addPost} setVisible={setModalVisible}/>
                    </MyModal></div>
                : null
            }
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;