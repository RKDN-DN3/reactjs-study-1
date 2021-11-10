import React,{Component, useCallback} from 'react';
import ComA4 from './ComA4';
import { demoAsyncCall,showTimeRender,showLoading } from '../../Common/CommonFunction';

const styleOutSide= {display:"flex"};
const onClickOutSide = ()=> alert('namnn')
class App4 extends Component{
    constructor(props){
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                _countState:state._countState+1
            }));
        };       
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
        this.updateCountState = this.updateCountState.bind(this);         
    }

    componentDidMount() {
        demoAsyncCall().then(() => this.setState({ _loading: false }));       
    }

    updateCountState=()=>{
        this.setState({
            _countState:this.state._countState+1,
        })         
    }

    setCount=(count)=>{
        this.setState({
            _countState:count
        })
    }

    updateCountprops=()=>{
        this.setState({
            _countProps:this.state._countProps+1,
        })        
    }   
    handleClick() {
        alert('NamNN');    
    }  
    render(){   
        const styleInSide= {display:"flex"}; 
        var { _countState } = this.state;  
        const { _loading } = this.state;  
        const handler=()=> this.setCount(_countState+1);  
        // const handlerCallBack= useCallback(()=>this.setCount(_countState+1),[])        
        return(
            <div>
                <div className="ml-30">
                    <h2>Parent</h2>
                    {showLoading(_loading)}
                    {showTimeRender()}
                    <table>
                        <tr>
                            <td className="color">STATE</td>
                            <td>Count: {this.state._countState}</td>
                        </tr>
                        <tr>
                            <td className="color">PROPS</td>
                            <td>Count: {this.state._countProps}</td>
                        </tr>
                    </table>
                    <a className="btn btn-primary btn-sm m-lg-2" onClick={this.updateCountState} role="button">Update State</a>
                    <a className="btn btn-secondary btn-sm m-lg-2" onClick={this.updateCountprops} role="button">Update Props</a>                     
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <ComA4 onClick = {()=> this.setCount(_countState+1)} content="onClick = {()=> this.setCount(_countState+1)} ">
                                {this.state._countProps}
                            </ComA4>  
                        </div>
                        <div className="p-2">
                            <ComA4 onClick = {handler} content="onClick = {handler}">
                                {this.state._countProps}
                            </ComA4>  
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <ComA4 onClick = {this.updateCountState} content="onClick = {Callback - use Contructor}">
                                {this.state._countProps}
                            </ComA4>  
                        </div>
                        <div className="p-2">                          
                        </div>
                    </div>                                                        
                </div>   
            </div>
        );
    }
}
export default App4;
