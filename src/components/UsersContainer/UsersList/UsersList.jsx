import React, {useEffect} from 'react';
import Loader from "../../../UI/Loader";
import Paginator from "../../common/Paginator";
import User from "./User/User";

const UsersList = ({totalUsersCount,pageSize,changePage,currentPage,...props}) => {
    useEffect(() => {
       props.getUsers(props.currentPage, props.pageSize)
    }, [])

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} changePage={changePage} currentPage={currentPage}/>
            {props.isLoading
                ? <Loader/>
                : <div>
                    {props.users.map(u => <User
                    key={u.id}
                    user={u}
                    isFollowingInProgress={props.isFollowingInProgress}
                    unFollow={props.unFollow}
                    follow={props.follow}/>
                    )}
                </div>
            }
        </div>
    )
}
export default UsersList;