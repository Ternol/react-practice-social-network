import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    // const stateFriendsSidebar = props.store.getState().friendsSidebar
    return (
        <div className="wrapper">
            < Header/>
            <Nav />
            <div className="wrapper-content">
                <Route path='/profile' render={ () =>
                    < Profile />
                }/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer />
                }/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
