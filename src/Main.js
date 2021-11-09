import React,{Component,useImperativeHandle,useState,useMemo } from 'react';
import './index.css';
import Handle from './components/Handle';
import App from './components/Home/App';
import AppRender from './components/Render/AppRender';
import App3 from './components/UseMemo/App3';
import App4 from './components/UseCallback/App4';
import App5 from './components/Context/App5';
import InputFormStore from './stores/InputPage';
import RenderPage from './stores/RenderPage';
import PropsPage from './stores/PropsPage';
import { CalculateFactorial } from './components/UseMemo/App3';
import Demo from './components/Demo/Demo';
import { BrowserRouter as BrowserRouter,Route, Link  ,Routes ,Router } from 'react-router-dom'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            routes:[
                {
                    name:"Home",
                    path:"/",
                    element:<App/>,
                    isActive: false
                },       
                {
                    name:"Context",
                    path:"Context",
                    element:<App5/>,
                    isActive: false
                },        
                {
                    name:"UserCallback",
                    path:"UserCallback",
                    element:<App4/>,
                    isActive: false
                },                       
                {
                    name:"UseMemo",
                    path:"Memo2",
                    element:<CalculateFactorial/>,
                    isActive: false
                },   
                {
                    name:"Props",
                    path:"Props",
                    element:<PropsPage/>,
                    isActive: false
                },  
                {
                    name:"Render",
                    path:"Render",
                    element:<RenderPage/>,
                    isActive: false
                },        
                {
                    name:"FormInput",
                    path:"FormInput",
                    element:<InputFormStore/>,
                    isActive: false
                },
                {
                    name:"Demo",
                    path:"Demo",
                    element:<Demo/>,
                    isActive: false
                },
            ]   
        }
    }
    activeRoute=(route)=>{
        this.setState({
            routes: this.state.routes.map(el => (el.isActive === true ? Object.assign(el, {isActive:false} ) : el))
        })
        route.isActive=true;
    }
    clearStateRoute=()=>{

    }
    render(){            
        var elRoutes= this.state.routes.map((route,index)=>{
            return ( 
                <Route path={route.path} element={route.element} />
            )
        })
        var elLinks= this.state.routes.map((route,index)=>{
            var strActive=route.isActive?"active":"";
            return (     
                <div className={"tab-item " + strActive}>
                    <Link to={route.path} onClick={()=>this.activeRoute(route)}>{route.name}</Link>                   
                 </div>                
            )
        })
        return(
            <div style={{marginBottom:'50px'}}>               
                    <div className="tabs7">
                        {elLinks}
                    </div>
                    <Routes>
                        {elRoutes}
                    </Routes>               
            </div>
        );
    }
}

export default Main;
