import React,{ Component} from 'react';
import ComponentB from './ComponentB';
import { showTimeRender } from '../../Common/CommonFunction';
import TableData from '../ChildCom/TableData';

class ComponentA extends Component{  
    constructor(props){
        super(props);
        this.state={
            _countState:0           
        }
    }
    updateCountState=()=>{
        this.setState({
            _countState:this.state._countState+1,
        })        
    } 
    render(){        
        return (
        <div className="m-30 div-border" style={{backgroundColor:"burlywood"}}>
            <div className="ml-30" > 
                <h2>Component A {this.props.children}</h2>  
                {showTimeRender()}                  
                <div>
                    <TableData count={this.state._countState}></TableData>
                   
                    <a className="btn btn-primary btn-sm m-lg-2" onClick={this.updateCountState} role="button">Update State</a>                   
                </div>
                <ComponentB name="Comp B">
                    {this.props.children}
                </ComponentB>
            </div>
        </div>
        )
    }
}

export default  ComponentA;

