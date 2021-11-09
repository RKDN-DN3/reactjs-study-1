import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as BrowserRouter,Route, Link  ,Routes ,Router } from 'react-router-dom'
const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>      
        <Main/>
    </BrowserRouter>,
    
//   <React.StrictMode>    
//     <App />
//   </React.StrictMode>,
    rootElement
);

reportWebVitals();
