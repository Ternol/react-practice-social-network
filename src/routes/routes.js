import DialogsContainer from "../components/Dialogs/DialogsContainer";
import Settings from "../components/Settings/Settings";
import Login from "../components/Login/Login";
import UsersList from "../components/UsersList/UsersList";
import Profile from "../components/Profile/Profile";

export const privateRoutes = [
    {path: '/users', component: UsersList, exact: false},
    {path: '/profile/:id?', component: Profile, exact: false},
    {path: '/dialogs', component: DialogsContainer, exact: false},
    {path: '/settings', component: Settings, exact: false},
]
export const publicRoutes = [
    {path: '/login', component: Login, exact: false},
]