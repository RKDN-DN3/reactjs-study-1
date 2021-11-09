import React,{ Component} from 'react';
import { showTimeRender } from '../../Common/CommonFunction';
import TableData from '../ChildCom/TableData';

class ComponentC extends Component{  
    constructor(props){
        super(props);
        this.state={
            _countState:0,
            _countProps:0,
        }
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
        <div className="m-30 div-border" style={{backgroundColor:"chocolate"}}  >
            <div className="ml-30">
            <h2>Component C {this.props.children}</h2>
           {showTimeRender()}

           <div>
                <TableData count={this.state._countState}></TableData>
                <a className="btn btn-primary btn-sm m-lg-2" onClick={this.updateCountState} role="button">Update State</a>
            </div>
            </div>
        </div>
        )
    }
}

export default ComponentC;