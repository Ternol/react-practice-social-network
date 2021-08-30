import {connect} from "react-redux";
import {
    changePage,
    follow, follow_UnFollow, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    unFollow
} from "../../redux/reducers/usersReducer";
import {showLoader} from "../../redux/reducers/UIUtilsReducer";
import Users from "./Users/Users";


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
    {follow_UnFollow, setCurrentPage,
        toggleFollowingInProgress, getUsers, changePage})(Users)
