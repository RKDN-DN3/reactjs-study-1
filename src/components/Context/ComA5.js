import React,{ Component} from 'react';
import ComB5 from './ComB5';
import { demoAsyncCall,showTimeRender,showLoading } from '../../Common/CommonFunction';

const style= {display:"flex"};
class ComA5 extends Component{  
    constructor(props){
        super(props);
        this.state={
            _countState:0,
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
    render(){
        const { _loading } = this.state;   
        return (
        <div className="m-30 div-border" style={{backgroundColor:"burlywood"}}>
            <div className="ml-30" > 
                {showLoading(_loading)}  
                <h2>memo(Component A {this.props.children})</h2>  
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
                <ComB5 name="B">
                    {this.props.children}
                </ComB5>
            </div>
        </div>
        )
    }
}

export default  React.memo(ComA5);

