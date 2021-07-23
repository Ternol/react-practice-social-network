import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


const postsData = [
    {message: 'Сегодня учу props', id: 3, likesCount: 10},
    {message: 'Как дела?', id: 2, likesCount: 14},
    {message: 'Привет всем!', id: 1, likesCount: 21}
]

const dialogsData = [{name: 'Александр', id: 1},
    {name: 'Владислав', id: 2},
    {name: 'Настя', id: 3},
    {name: 'Володя', id: 4},
    {name: 'Илон Маск', id: 5},
];

const messagesData = [{message: '42', id: 1},
    {message: 'Как дела?', id: 2},
    {message: 'Привет', id: 3},
];


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
