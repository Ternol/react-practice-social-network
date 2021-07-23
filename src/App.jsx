import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";



const App = (props) => {
    return (
        <div className="wrapper">
            < Header/>
            < Nav/>
            <div className="wrapper-content">
                <Route path='/profile' render={ () =>
                    < Profile postData = {props.postsData} key={props.postsData.id}/>
                }/>
                <Route path='/dialogs' render={() =>
                    <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} key={props.messagesData.id}/>
                }/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
