import React from "react";
import './App.css';
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Redirect, Switch, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer/ProfileContainer";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";


const App = () => {
    return (
        <div className="wrapper">
            < HeaderContainer/>
            <Nav/>
            <div className="wrapper-content">
                <Switch>
                    <Route path='/users'><UsersContainer/></Route>
                    <Route path='/profile/:id?'><ProfileContainer/></Route>
                    <Route path='/dialogs'><DialogsContainer/></Route>
                    <Route path='/news'><News/></Route>
                    <Route path='/music'><Music/></Route>
                    <Route path='/settings'><Settings/></Route>
                    <Redirect to='/news'/>
                </Switch>
            </div>
        </div>
    )
}

export default App;
