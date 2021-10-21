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
import {useLocation } from 'react-router-dom';


const UsersList: FC = () => {

    const {currentPage,isLoading,pageSize,totalUsersCount,usersData} = useTypedSelector(state => state.usersPage)
    const dispatch = useDispatch()

    const urlParamsObj = useLocation()

    function getQueryParamsFromUrl(locationObj:typeof urlParamsObj, param:string) {
        const params = new URLSearchParams(locationObj.search)
        return params.get(`${param}`)
    }


    useEffect(() => {
       const queryParam = getQueryParamsFromUrl(urlParamsObj, 'term')
       queryParam ? dispatch(getUsers(1,pageSize,queryParam)) :
       dispatch(getUsers(currentPage, pageSize))
    }, [dispatch,pageSize,currentPage])

    return (
        <div>
            <UsersSearchForm />
            <Paginator totalItemsCount={totalUsersCount} />
            {isLoading
                ? <Loader/>
                : usersData.length > 0 ?
                    <div className={s.userList}>
                        {usersData.map((u: UserDataType) => <User key={u.id} user={u}/>)}
                    </div>
                    : <h2 className={s.usersNotFound}>No users were found for the selected parameters</h2>
            }
        </div>
    )
}
export default UsersList;