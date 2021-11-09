import React,{ Component} from 'react';
import { demoAsyncCall } from '../../Common/CommonFunction';
import {AppContext} from './App';
class ComC extends Component{  
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
        let value=this.context;  
    }
    componentDidUpdate() {
        let value = this.context;
        /* ... */
      }
      componentWillUnmount() {
        let value = this.context;
        /* ... */
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
    showInfo(isLoading){
        if(isLoading){
            return ( 
            <h3 style={{color:"red"}}>
                Loading...                
            </h3>)
        }
    }
    showTimeRender(){
        var dateNow= new Date();
        return(<div>
            <h4>Date: {dateNow.toLocaleTimeString()}</h4>
        </div>)
    }
    render(){
        const { _loading } = this.state;   
                   
        return (
        <div className="ml-30" style={{backgroundColor:"cadetblue"}}  >
            {this.showTimeRender()}
            {this.showInfo(_loading)}
           <h1>Component C {this.props.children}</h1>
           <div>
                <h3>
                    Count:{this.state._countState} 
                </h3>
                <AppContext.Consumer>
                    {(_curentvalue) => (
                        <div>
                            <h3>
                                Context App:{_curentvalue}
                            </h3> 
                            {this.showTimeRender()}
                            {/* <a className="btn btn-primary btn-sm " onClick={_toggleTheme} role="button">Update State App</a> */}
                        </div>
                    )}
                </AppContext.Consumer>
                
                <a className="btn btn-primary btn-sm " onClick={this.updateCountState} role="button">Update State</a>
                <a className="btn btn-secondary btn-sm " onClick={this.props.onClick} role="button">Update State B</a>
            </div>
        </div>
        )
    }
}

export default ComC;