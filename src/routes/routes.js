import UsersContainer from "../components/UsersContainer/UsersContainer";
import ProfileContainer from "../components/Profile/ProfileContainer/ProfileContainer";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import News from "../components/News/News";
import Music from "../components/Music/Music";
import Settings from "../components/Settings/Settings";
import Login from "../components/Login/Login";

export const privateRoutes = [
    {path: '/users', component: UsersContainer, exact: false},
    {path: '/profile/:id?', component: ProfileContainer, exact: false},
    {path: '/dialogs', component: DialogsContainer, exact: false},
    {path: '/settings', component: Settings, exact: false},
]
export const publicRoutes = [
    {path: '/login', component: Login, exact: false},
]