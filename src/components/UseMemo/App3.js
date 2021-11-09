import React,{Component,useMemo, useState} from 'react';
import ComA3 from './ComA3';
import ComA6  from '../Task6/ComA6';
import { demoAsyncCall,showTimeRender,showLoading } from '../../Common/CommonFunction';

const styleOutSide= {display:"flex"};
const onClickOutSide = ()=> alert('namnn')
class App3 extends Component{
    constructor(props){
        super(props);       
        this.state={
            _countState:0,
            _countProps:0,
            _loading:true,      
            _toggleTheme:this.updateCountState,
            _user:{
                name:"Nam",
                role:"admin"
            }
        }   
        this.options=this.options.bind(this); 
    }

    componentDidMount() {
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

    updateName=()=>{
        this.setState({
            _user: {
                name:this.state._user.name==="Nam"?"Nam1":"Nam",
                role:this.state._user.role
            }            
        }) 
    }
    updateRole=()=>{
        this.setState({
            _user: {
                name:this.state._user.name,
                role:this.state._user.role==="admin"?"user":"admin"
            }   
        }) 
    }
  
    render(){   
        const styleInSide= {display:"flex"}; 
        const {_user}=this.state        
        const isAdmin=_user.role==='admin';
        const { _loading } = this.state;      
     
        return(
            <div>
                <div className="ml-30">
                    <h2>Parent</h2>
                    {showLoading(_loading)}
                    {showTimeRender()}
                    <table>
                        <tr>
                            <td className="color">STATE </td>
                            <td>"Name": "{this.state._user.name}",Role:"{this.state._user.role}"</td>
                        </tr>
                        <tr>
                            <td className="color">PROPS</td>
                            <td>Count: {this.state._countProps}</td>
                        </tr>
                    </table>
                    <a className="btn btn-primary btn-sm m-lg-2" onClick={this.updateName} role="button">Update name</a>
                    <a className="btn btn-secondary btn-sm m-lg-2" onClick={this.updateRole} role="button">Update role</a> 
                    <div className="d-flex flex-row">
                        <div className="p-2"> 
                            <ComA3 value = {"isAdmin:"+isAdmin} content="isAdmin=_user.role==='admin'">
                                {this.state._countProps}
                            </ComA3>                      
                        </div>
                        <div className="p-2">
                            <ComA3 value = {"isAdmin:"+ this.options(this.state._user)} content="style = {{display:'flex'}}">
                                {this.state._countProps}
                            </ComA3>  
                        </div>                        
                    </div>                                                          
                </div>   
            </div>
        );
    }
}

export function CalculateFactorial() {
    const [_countState, updateCountState] = useState(0);   
    const [_countProps, updateCountProps] = useState(0);   
    const [_user, FuncUser] = useState({
        name:"namnn",
        role:"admin"
    });   
    const UpdateState=()=>updateCountState(i=>i+1);  
    const updateName=()=>FuncUser(i =>{     
        let temp = Object.assign({}, i);
        temp.name=i.name==="namnn"?"namnn1":"namnn"
        return temp;
    });  
    const updateRole=()=>FuncUser(i =>{
        let temp = Object.assign({}, i);
        temp.role=i.role==="admin"?"user":"admin"
        return temp;
    }); 
    const isAdmin=_user.role==='admin'; 
    const options= useMemo(()=>({isAdmin:_user.role==='admin'}),[])  
    const options2= useMemo(()=>({
        isAdmin:_user.role==='admin'
    }),[_user])  
    return (
      <div>        
        <div className="ml-30">
            <h2>APP1</h2>                   
            {showTimeRender()}
            <table>
                <tr>
                    <td className="color">STATE</td>
                    <td>Count: {_countState}-name:"{_user.name}"-role:"{_user.role}"</td>
                </tr>                   
            </table>
            <a className="btn btn-primary btn-sm m-lg-2" onClick={()=>UpdateState()} role="button">Update State</a>     
            <a className="btn btn-primary btn-sm m-lg-2" onClick={updateName} role="button">Update name</a>
                    <a className="btn btn-secondary btn-sm m-lg-2" onClick={updateRole} role="button">Update role</a>               
            <div className="d-flex flex-row">
                <div className="p-2"> 
                    <ComA6 value = {"isAdmin:"+isAdmin} content="isAdmin=_user.role==='admin'">
                       {_countProps}
                    </ComA6>                      
                </div>
                <div className="p-2">
                    <ComA6 value = {"isAdmin1:"+options.isAdmin} content=" useMemo(()=>({isAdmin:_user.role==='admin'}),[])  ">
                    {_countProps}
                    </ComA6>  
                </div>                        
            </div>  
            <div className="d-flex flex-row">               
                <div className="p-2">
                    <ComA6 value = {"isAdmin1:"+options2.isAdmin} content=" useMemo(()=>({isAdmin:_user.role==='admin'}),[_user])  ">
                    {_countProps}
                    </ComA6>  
                </div>                        
            </div>                                                                                      
        </div> 
      </div>
    );
}

export default App3;
