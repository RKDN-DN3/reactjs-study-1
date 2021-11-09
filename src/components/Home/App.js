import React,{Component,useImperativeHandle,useState,useMemo } from 'react';
import '../../index.css';
import Handle from '../Handle';
import ComA from './ComA';
import { demoAsyncCall } from '../../Common/CommonFunction';


export const AppContext = React.createContext({});
var vl=1;

class App extends Component{
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
        vl=vl+1;
    }
    updateCountprops=()=>{
        this.setState({
            _countProps:this.state._countProps+1,
        })        
    }
    showInfo(isLoading){
        if(isLoading){
            return ( 
            <h3 style={{color:"red"}}>
                Loading...                
            </h3>)
        }
    }
    showTimeRender(){
        var dateNow= new Date();
        return(<div>
            <h4>Date: {dateNow.toLocaleTimeString()}</h4>
        </div>)
    } 
    computeLetterCount = word => {
        let i = 0;
        while (i < 1000000000) i++;
        return word.length;
    };
    
    render(){    
        const { _loading } = this.state;         

        return(
            <div style={{marginBottom:'50px'}}>
               <div>
                    <div className="ml-30">
                        {this.showTimeRender()}
                        {this.showInfo(_loading)}
                        <h3>
                           Main(CountState: {this.state._countState} ----- CountProps: {this.state._countProps})
                        </h3>
                        <a className="btn btn-primary btn-sm " onClick={this.updateCountState} role="button">Update State</a>
                        <a className="btn btn-secondary btn-sm " onClick={this.updateCountprops} role="button">Update Props</a>  
                        <FibDisplay length={this.state._countState} /> 

                        <AppContext.Provider value={vl}>
                            <ComA >
                                {this.state._countProps}
                            </ComA>  
                        </AppContext.Provider>
                                                                    
                    </div>                    
                    <Handle 
                        name="Handle Event"
                    >
                        100 
                    </Handle>
               </div>                
                {/* <Demo /> */}
                <div className="ml-30">
                </div>
            </div>
        );
    }
}
function FibDisplay({length}) {
  const numbers = useMemo(() => {
    console.log('Calculating numbers...');
    const result = [1, 1];
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }, [length]);

  return <p>{length} numbers of the fibonacci sequence: {numbers.join(', ')}</p>;
}

export default App;
