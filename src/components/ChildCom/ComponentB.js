import React,{ Component} from 'react';
import ComponentC from './ComponentC';
import { showTimeRender ,showBtnOnClick} from '../../Common/CommonFunction';
import TableData from '../ChildCom/TableData';

class ComponentB extends Component {  
    constructor(props){
        super(props);
        this.state={
            _countState:0,
            _countProps:0
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
        return (
        <div className="m-30 div-border" style={{backgroundColor:"blanchedalmond"}}>
            <div className="ml-30">            
            <h2>memo({this.props.name} {this.props.children})</h2>
            {showTimeRender()}     
            {this.ShowInfo(this.props.isShow)}        
            </div>
        </div>
        )
    }
    ShowInfo(isShow) {
        if(isShow===undefined) {
            return(
                <div>
                    <div>
                        <TableData count={this.state._countState}></TableData>
                        <a className="btn btn-primary btn-sm m-lg-2" onClick={this.updateCountState} role="button">Update State</a>
                        {/* <a className="btn btn-secondary btn-sm " onClick={this.updateCountprops} role="button">Update Props</a> */}
                    </div>         
                    <ComponentC>
                        {this.props.children}
                    </ComponentC>
                </div>
            )
        }else{
            return(<div className="min-w-50">
                <h4>PROPS: {this.props.content}</h4>
                {showBtnOnClick(this.props.onClick)}
            </div>)
        }
        
    }
}

export default React.memo(ComponentB);