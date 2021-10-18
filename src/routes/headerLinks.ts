import homeIcon from './../img/icons/home-32.png'
import usersIcon from './../img/icons/user-32.png'
import messagesIcon from './../img/icons/mail-32.png'
import settingsIcon from './../img/icons/settings-32.png'

type link = {
    path: string,
    icon: string,
    text: string
}

export const headerLinks:Array<link> = [
    {path: '/profile/', icon: homeIcon, text: 'Home'},
    {path: '/users/', icon: usersIcon, text: 'Users'},
    {path: '/dialogs/', icon: messagesIcon, text: 'Dialogs'},
    {path: '/settings/', icon: settingsIcon, text: 'Settings'},
]