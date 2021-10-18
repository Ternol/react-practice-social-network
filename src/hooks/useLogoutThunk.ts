import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {logoutUser} from "../redux/reducers/authReducer";


export const useLogoutThunk = () => {
    const dispatch = useDispatch()
    return bindActionCreators(logoutUser, dispatch)
}