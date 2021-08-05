import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducers/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    postsData: state.postsData
})
const mapDispatchToProps = (dispatch) => ({
    addPost: () => dispatch(addPostActionCreator()),
    onPostChange: (text) => dispatch(updateNewPostTextActionCreator(text))
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
