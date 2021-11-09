import React,{Component} from 'react';
import ComponentA from '../ChildCom/ComponentA';
import { connect } from 'react-redux'
import { showTimeRender } from '../../Common/CommonFunction';
import TableData from '../ChildCom/TableData';
import { countPropsTodo, countTodo ,countCreateTodo} from '../../actions/actions'

class AppRender extends Component{
    constructor(props){
        super(props); 
    } 

    render(){
        const { dispatch, valueState } = this.props      
        return(
            <div className="ml-30">
                <h2>APP RENDER</h2>
                {showTimeRender()}

                <TableData count={valueState.id} props={valueState.idProps}></TableData>

                <a className="btn btn-primary btn-sm m-lg-2" onClick={()=>dispatch(countTodo(true,''))} role="button">Update State</a>               
                <a className="btn btn-secondary btn-sm m-lg-2" onClick={()=>dispatch(countTodo(false,''))} role="button">Update Props</a>  
                
                <ComponentA >
                    {valueState.idProps}
                </ComponentA>                                                                                 
            </div>               
        );
    }
}

function select(state) {
    return {
        valueState: state.todos
    }
}

export default connect(select)(AppRender);
