import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './components/Demo/Demo';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as BrowserRouter,Route, Link  ,Routes ,Router } from 'react-router-dom'


const rootElement = document.getElementById("root");
var routes=[
    {
        name:"Home",
        path:"/",
        element:<App/>,
        isActive: true
    },
    {
        name:"App",
        path:"App",
        element:<App/>,
        isActive: false
    },
    {
        name:"Demo",
        path:"Demo",
        element:<Demo/>,
        isActive: false
    },
]

export function activeRoute(route){
    route.isActive=true;
}

var elRoutes= routes.map((route,index)=>{
    return ( 
        <Route path={route.path} element={route.element} />
    )
})
var elLinks= routes.map((route,index)=>{
    var strActive=route.isActive?"active":"";
    return (     
        <div className={"tab-item " + strActive}><Link to={route.path} onClick={activeRoute(route)} >{route.name}</Link> </div>
    )
})
ReactDOM.render(
    <BrowserRouter>
        {/* <div className="tabs7">
            {elLinks}
        </div>
        <Routes>
            {elRoutes}
        </Routes> */}
        <Main/>
    </BrowserRouter>,
//   <React.StrictMode>    
//     <App />
//   </React.StrictMode>,
    rootElement
);

reportWebVitals();
