import React, {FC, useEffect} from 'react';
import Loader from "../../UI/Loader/Loader";
import Paginator from "../common/Paginator";
import User from "./User/User";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {getUsers} from "../../redux/reducers/usersReducer";
import {UserDataType} from "../../types/userReducerTypes";
import UsersSearchForm from "./UsersSearchForm";
import s from './usersList.module.css'


const UsersList: FC = () => {

    const {currentPage,isLoading,pageSize,totalUsersCount,usersData} = useTypedSelector(state => state.usersPage)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getUsers(currentPage, pageSize))
    }, [dispatch,pageSize,currentPage])

    return (
        <div>
            <UsersSearchForm />
            <Paginator totalItemsCount={totalUsersCount} />
            {isLoading
                ? <Loader/>
                : <div className={s.userList}>
                    {usersData.map((u: UserDataType) => <User key={u.id} user={u}/>)}
                </div>
            }
        </div>
    )
}
export default UsersList;