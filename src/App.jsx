import React from "react";
import './App.css';
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <main className="wrapper-content">
                <div className="container">
                    <AppRouter />
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
