import Settings from "../components/Settings/Settings";
import UsersList from "../components/UsersList/UsersList";
import Profile from "../components/Profile/Profile";
import Dialogs from "../components/Dialogs/Dialogs";
import Login from "../components/Login/Login";



export const privateRoutes = [
    {path: '/users', component: UsersList, exact: false},
    {path: '/profile/:id?', component: Profile, exact: false},
    {path: '/dialogs', component: Dialogs, exact: false},
    {path: '/settings', component: Settings, exact: false},
]
export const publicRoutes = [
    {path: '/login', component: Login, exact: false},
]