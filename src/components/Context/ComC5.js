import React,{ Component} from 'react';
import { demoAsyncCall,showTimeRender,showLoading } from '../../Common/CommonFunction';
import {AppContext} from './App5';

class ComC5 extends Component{  
    constructor(props){
        super(props);
        this.state={
            _countState:0,
            _countProps:0,
            _loading:true
        }
    }

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({ _loading: false }));          
    }  

    updateCountState=()=>{
        this.setState({
            _countState:this.state._countState+1,
        })        
    }

    updateCountprops=()=>{
        this.setState({
            _countProps:this.state._countProps+1,
        })        
    } 

    render(){
        const { _loading } = this.state; 
        const context= AppContext;
        return (
        <div className="m-30 div-border" style={{backgroundColor:"chocolate"}}  >
            <div className="ml-30">           
            {showLoading(_loading)}
            <h2>Component C {this.props.children}</h2>
           {showTimeRender()}
           <div>
                <table>
                    <tr>
                        <td className="color">STATE</td>
                        <td>Count: {this.state._countState}</td>
                    </tr>   
                    <AppContext.Consumer>
                    {(user) => (
                         <tr>
                         <td className="color">Consumer context</td>
                         <td> Name:{user.name} Role:{user.role}  {showTimeRender()}      </td>
                     </tr>  
                    )}
                </AppContext.Consumer>                 
                </table>
               
                <a className="btn btn-primary btn-sm m-lg-2" onClick={this.updateCountState} role="button">Update State</a>
            </div>
            </div>
        </div>
        )
    }
}

export default ComC5;