import React from "react";
import './App.css';
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="wrapper">
            <div className='site-content'>
                <header><HeaderContainer/></header>
                <main>
                    <div className="container">
                        <AppRouter/>
                    </div>
                </main>
            </div>
            <footer><Footer/></footer>
        </div>
    )
}

export default App;
