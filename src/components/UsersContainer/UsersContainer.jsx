import Users from './Users/Users'
import {connect} from "react-redux";
import {followAC, setUsersAC, testAC, unFollowAC} from "../../redux/reducers/usersReducer";

const mapStateToProps = (state) => {
  return  {users: state.usersPage.usersData}
}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => dispatch(followAC(userId)),
      unFollow: (userId) => dispatch(unFollowAC(userId)),
      setUsers: (users) => dispatch(setUsersAC(users)),
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(Users)
