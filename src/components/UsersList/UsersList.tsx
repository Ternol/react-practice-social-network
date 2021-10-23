import React, {FC, useEffect} from 'react';
import Loader from "../../UI/Loader/Loader";
import Paginator from "../common/Paginator";
import User from "./User/User";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {setFilterAndRequestUsers} from "../../redux/reducers/usersReducer";
import {UserDataType} from "../../types/userReducerTypes";
import UsersSearchForm from "./UsersSearchForm";
import s from './usersList.module.css'
import { useHistory } from 'react-router-dom';
import * as queryString from "querystring";


const UsersList: FC = () => {

    const {currentPage,isLoading,pageSize,totalUsersCount,usersData,filter} = useTypedSelector(state => state.usersPage)
    const dispatch = useDispatch()

    const history = useHistory()

    type QueryParamsType = { term?: string; page?: string; friend?: string }
    useEffect(()=> {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)


        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
        if (!!parsed.friend) actualFilter = {...actualFilter,
            friend: parsed.friend==='null' ? null : parsed.friend === 'true'}

        dispatch(setFilterAndRequestUsers(actualPage, pageSize, actualFilter))
    },[])

    useEffect(()=> {
        const query: QueryParamsType = {}

        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

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