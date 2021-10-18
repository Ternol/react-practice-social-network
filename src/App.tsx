import React, {FC} from "react";
import './App.css';
import AppRouter from "./AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App:FC = () => {
    return (
        <div className="wrapper">
            <div className='site-content'>
                <header><Header/></header>
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
