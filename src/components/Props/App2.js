import React,{Component} from 'react';
import ComA2 from './ComA2';
import { demoAsyncCall,showTimeRender,showLoading } from '../../Common/CommonFunction';

const styleOutSide= {display:"flex"};
const onClickOutSide = ()=> alert('namnn')
class App2 extends Component{
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

    render(){   
        const styleInSide= {display:"flex"}; 
        const { _loading } = this.state;         
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
                            <ComA2 name = {"NamNN"} content="name = {'NamNN'}">
                                {this.state._countProps}
                            </ComA2>                      
                        </div>
                        <div className="p-2">
                            <ComA2 style = {{display:"flex"}} content="style = {{display:'flex'}}">
                                {this.state._countProps}
                            </ComA2>  
                        </div>                        
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <ComA2 style = {styleOutSide} content="style = {styleOutSide}">
                                {this.state._countProps}
                            </ComA2> 
                        </div>
                        <div className="p-2">
                            <ComA2 style = {styleInSide} content="style = {styleInSide}">
                                {this.state._countProps}
                            </ComA2> 
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <ComA2 onClick = {()=> alert('namnn')} content="onClick = {()=> alert('namnn')}">
                                {this.state._countProps}
                            </ComA2>  
                        </div>
                        <div className="p-2">
                            <ComA2 onClick = {onClickOutSide} content="onClick = {onClickOutSide}">
                                {this.state._countProps}
                            </ComA2>  
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <ComA2 onClick = {()=>this.updateCountState()} content="onClick = {()=>this.updateCountState()} ">
                                {this.state._countProps}
                            </ComA2>  
                        </div>
                        <div className="p-2">
                           
                        </div>
                    </div>                                                        
                </div>   
            </div>
        );
    }
}

export default App2;
