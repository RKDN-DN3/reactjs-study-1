import React,{ Component} from 'react';
import ComC from './ComC';
import { demoAsyncCall,showTimeRender } from '../../Common/CommonFunction';

class ComB extends Component {  
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
    showInfo(isLoading){
        if(isLoading){
            return ( 
            <h3 style={{color:"red"}}>
                Loading...                
            </h3>)
        }
    }   
    render(){
        const { _loading } = this.state;      
        return (
        <div className="ml-30" style={{backgroundColor:"blanchedalmond"}}>
            {showTimeRender()}
            {this.showInfo(_loading)}
           <h1>memo(Compo {this.props.name} {this.props.children})</h1>
           <div>
                <h3>
                    Count:{this.state._countState}
                </h3>
                <a className="btn btn-primary btn-sm " onClick={this.updateCountState} role="button">Update State</a>
                {/* <a className="btn btn-secondary btn-sm " onClick={this.updateCountprops} role="button">Update Props</a> */}
            </div>         
            <ComC onClick={()=>this.updateCountState()} >
                {this.props.children}
            </ComC>
        </div>
        )
    }
}

export default React.memo(ComB);