import React, {useEffect} from 'react';
import Loader from "../../UI/Loader/Loader";
import Paginator from "../common/Paginator";
import User from "./User/User";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {getUsers} from "../../redux/reducers/usersReducer";
import {UserDataType} from "../../types/userReducerTypes";


const UsersList: React.FC = () => {

    const {currentPage,isLoading,pageSize,totalUsersCount,usersData} = useTypedSelector(state => state.usersPage)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getUsers(currentPage, pageSize))
    }, [])

    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} />
            {isLoading
                ? <Loader/>
                : <div>
                    {usersData.map((u: UserDataType) => <User key={u.id} user={u}/>)}
                </div>
            }
        </div>
    )
}
export default UsersList;