import React,{ Component} from 'react';
import ComB from './ComB';
import { demoAsyncCall } from '../Common/CommonFunction';

const style= {display:"flex"};
class ComA extends Component{  
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
        //this.props.hideLoader();
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
        //const style= {display:"flex"};
        return (
            
        <div className="ml-30" style={{backgroundColor:"aqua"}}>    
            {this.showTimeRender()}       
            {this.showInfo(_loading)}            
           <h1>Component A State {this.props.children}</h1>
           <div>
                <h3>
                    Count:{this.state._countState}
                </h3>
                <a className="btn btn-primary btn-sm " onClick={this.updateCountState} role="button">Update State</a>
                {/* <a className="btn btn-secondary btn-sm " onClick={this.updateCountprops} role="button">Update Props</a> */}
            </div>
            <ComB name="B" style={style}>
                {this.props.children}
            </ComB>
            
            
        </div>
        )
    }
}

export default ComA;

