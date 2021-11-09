import React,{Component} from 'react';
import ComponentB from '../ChildCom/ComponentB';
import { showTimeRender } from '../../Common/CommonFunction';
import TableData from '../ChildCom/TableData';
import { countPropsTodo, countTodo ,countCreateTodo} from '../../actions/actions'
import { connect } from 'react-redux'

const styleOutSide= {display:"flex"};
const onClickOutSide = ()=> alert('namnn')
class AppProps extends Component{
    constructor(props){
        super(props);
        this.state={
            _user:{
                name:"Nam",
                role:"admin"
            }
        }        
    }

    render(){   
        const { dispatch, valueState } = this.props     
        const styleInSide= {display:"flex"}; 
        const valueIdProps=valueState.idProps;
              
        return(
            <div>
                <div className="ml-30">
                    <h2>Parent</h2>                  
                    {showTimeRender()}
                    <TableData count={valueState.id} props={valueState.idProps}></TableData>
                    
                    <a className="btn btn-primary btn-sm m-lg-2" onClick={()=>dispatch(countTodo(true,''))} role="button">Update State</a>               
                    <a className="btn btn-secondary btn-sm m-lg-2" onClick={()=>dispatch(countTodo(false,''))} role="button">Update Props</a>  
                   
                    <div className="d-flex flex-row">
                        <div className="p-2"> 
                            <ComponentB isShow={true} name = {"Child - "} content="name = {'NamNN'}">
                                {valueIdProps}
                            </ComponentB>                      
                        </div>
                        <div className="p-2">
                            <ComponentB isShow={true} name = {"Child - "} style = {{display:"flex"}} content="style = {{display:'flex'}}">
                                {valueIdProps}
                            </ComponentB>  
                        </div>                        
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <ComponentB isShow={true} name = {"Child - "} 
                            style = {styleOutSide} content="style = {styleOutSide}">
                                {valueIdProps}
                            </ComponentB> 
                        </div>
                        <div className="p-2">
                            <ComponentB isShow={true} name = {"Child - "} 
                            style = {styleInSide} content="style = {styleInSide}">
                                {valueIdProps}
                            </ComponentB> 
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <ComponentB isShow={true} name = {"Child - "} 
                            onClick = {()=> alert('namnn')} content="onClick = {()=> alert('namnn')}">
                                {valueIdProps}
                            </ComponentB>  
                        </div>
                        <div className="p-2">
                            <ComponentB isShow={true} name = {"Child - "} 
                            onClick = {onClickOutSide} content="onClick = {onClickOutSide}">
                                {valueIdProps}
                            </ComponentB>  
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <ComponentB isShow={true} name = {"Child - "} 
                            onClick = {()=>this.updateCountState()} content="onClick = {()=>this.updateCountState()} ">
                                {valueIdProps}
                            </ComponentB>  
                        </div>
                        <div className="p-2">
                           
                        </div>
                    </div>                                                        
                </div>   
            </div>
        );
    }
}
function select(state) {    
    return {
        valueState: state.todos
    }   
}

export default connect(select)(AppProps);
