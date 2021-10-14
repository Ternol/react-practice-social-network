import ProfileContainer from "../components/Profile/ProfileContainer/ProfileContainer";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import Settings from "../components/Settings/Settings";
import Login from "../components/Login/Login";
import UsersList from "../components/UsersList/UsersList";

export const privateRoutes = [
    {path: '/users', component: UsersList, exact: false},
    {path: '/profile/:id?', component: ProfileContainer, exact: false},
    {path: '/dialogs', component: DialogsContainer, exact: false},
    {path: '/settings', component: Settings, exact: false},
]
export const publicRoutes = [
    {path: '/login', component: Login, exact: false},
]