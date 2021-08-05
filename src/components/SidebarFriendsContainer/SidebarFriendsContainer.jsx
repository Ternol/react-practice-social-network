import {connect} from "react-redux";
import SidebarFriends from "./SidebarFriends/SidebarFriends";

const mapStateToProps = (state) => ({
    myFriends: state.friendsSidebar.myFriends
})

const mapDispatchToProps = () => ({

})
const SidebarFriendsContainer = connect(mapStateToProps,mapDispatchToProps) (SidebarFriends)

export default SidebarFriendsContainer;