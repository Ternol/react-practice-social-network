import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
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
        isLoading: state.UIUtils.isLoading
    }
}


export default connect(mapStateToProps, {follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, showLoader
})(Users)
