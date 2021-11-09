import React,{ Component} from 'react';
import { demoAsyncCall,showTimeRender,showLoading } from '../../Common/CommonFunction';

class ComA3 extends Component{  
    constructor(props){
        super(props);
        this.state={           
            _loading:true
        }
    }
    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({ _loading: false }));
        //this.props.hideLoader();
    }   
    showBtnOnClick(onClick){
        if(onClick)
        {
            return (
                <a className="btn btn-primary btn-sm m-lg-2" onClick={onClick} role="button">OnClick</a>
            )
        }
    }
    render(){
        const { _loading } = this.state;            
        return (
        <div className="m-30 div-border min-w-50" style={{backgroundColor:"burlywood"}}>
            <div className="ml-30 mr-30" > 
                {showLoading(_loading)}  
                <h2>memo( Child - {this.props.children})</h2>  
                <h4>Value: ({this.props.value})</h4>
                <h4>PROPS: {this.props.content}</h4>
                {showTimeRender()} 
                {this.showBtnOnClick(this.props.onClick)}
            </div>
        </div>
        )
    }
}

export default  React.memo( ComA3);

