import React,{Component} from 'react';
import ComA1 from './ComA1';
import { demoAsyncCall,showTimeRender,showLoading } from '../../Common/CommonFunction';

class App1 extends Component{
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
        const { _loading } = this.state;  
        return(
            <div>
                <div className="ml-30">
                    <h2>APP1</h2>
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
                    <ComA1 >
                        {this.state._countProps}
                    </ComA1>                                                                                 
                </div>   
            </div>
        );
    }
}

export default App1;
