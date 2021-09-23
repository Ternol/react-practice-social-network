import React from "react";
import './App.css';
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import AppRouter from "./AppRouter";

const App = () => {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <main className="wrapper-content">
                <div className="container">
                    <AppRouter />
                </div>
            </main>
        </div>
    )
}

export default App;
