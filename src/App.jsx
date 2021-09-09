import React from "react";
import './App.css';
import Nav from "./components/Nav/Nav";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import AppRouter from "./AppRouter";

const App = () => {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <Nav />
            <div className="wrapper-content">
                <AppRouter />
            </div>
        </div>
    )
}

export default App;
