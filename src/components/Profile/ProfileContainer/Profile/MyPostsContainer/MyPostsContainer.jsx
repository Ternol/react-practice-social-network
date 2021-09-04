import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../../../redux/reducers/profileReducer";

const mapStateToProps = (state) => ({
    postsData: state.profilePage.postsData,
})


const MyPostsContainer = connect(mapStateToProps, {addPost}) (MyPosts)

export default MyPostsContainer;
