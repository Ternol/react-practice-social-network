import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../../../redux/reducers/profileReducer";

const mapStateToProps = (state) => ({
    postsData: state.profilePage.postsData,
    avatar: state.profilePage.profile?.photos?.small,
    authorizedUserId: state.auth.id,
    userId: state.profilePage.profile.userId,
    userName: state.profilePage.profile.fullName,
})


const MyPostsContainer = connect(mapStateToProps, {addPost}) (MyPosts)

export default MyPostsContainer;
