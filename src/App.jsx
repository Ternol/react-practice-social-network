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
import {updateNewPostText} from "./state/state";




const App = (props) => {
    return (
        <div className="wrapper">
            < Header/>
            < Nav friendsSidebar={props.state.myFriendsSidebar}/>
            <div className="wrapper-content">
                <Route path='/profile' render={ () =>
                    < Profile statePosts = {props.state.postsPage} addPost={props.addPost} updateNewPostText={updateNewPostText}/>
                }/>
                <Route path='/dialogs' render={() =>
                    <Dialogs stateDialogs={props.state.dialogsPage}/>
                }/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
