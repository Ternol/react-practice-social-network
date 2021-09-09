import {connect} from "react-redux";
import {
    changePage, getUsers,
    follow, unFollow,
    toggleFollowingInProgress
} from "../../redux/reducers/usersReducer";
import UsersList from "./UsersList/UsersList";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}


export default connect(mapStateToProps,
    {follow,unFollow,
        toggleFollowingInProgress, getUsers, changePage})(UsersList)
