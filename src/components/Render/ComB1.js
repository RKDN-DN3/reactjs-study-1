import React,{ Component} from 'react';
import ComC1 from './ComC1';
import { demoAsyncCall,showTimeRender,showLoading } from '../../Common/CommonFunction';

class ComB1 extends Component {  
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
        return (
        <div className="m-30 div-border" style={{backgroundColor:"blanchedalmond"}}>
            <div className="ml-30">
            {showLoading(_loading)}
            <h2>memo(Compo {this.props.name} {this.props.children})</h2>
            {showTimeRender()}            
          
           <div>
                <table>
                    <tr>
                        <td className="color">STATE</td>
                        <td>Count: {this.state._countState}</td>
                    </tr>                        
                </table>
                <a className="btn btn-primary btn-sm m-lg-2" onClick={this.updateCountState} role="button">Update State</a>
                {/* <a className="btn btn-secondary btn-sm " onClick={this.updateCountprops} role="button">Update Props</a> */}
            </div>         
            <ComC1 onClick={()=>this.updateCountState()} >
                {this.props.children}
            </ComC1>
            </div>
        </div>
        )
    }
}

export default React.memo(ComB1);