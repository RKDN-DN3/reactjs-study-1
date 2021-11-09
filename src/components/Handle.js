import React,{ Component} from 'react';
import '../index.css';

class Handle extends Component{
    constructor(props){
        super(props);
        this.onShow= this.onShow.bind(this)
    }
    onShow(){
        alert(this.props.name)
        console.log(this.props.name);
    }
    onShow2=(str)=>{
        alert(str)
        console.log(str);
    }
    render(){
        return (
        <div className="ml-30" >            
            <div className="m-lg-1">
                <div className="thumbnail">
                    <img alt=""/>
                    <div>
                        <h3>
                            {this.props.name}<br></br>
                            {this.props.children}
                        </h3>                        
                        <div>
                            <button type="button" className="btn btn-warning" onClick={this.onShow }>
                                Show message
                            </button>  
                            <button type="button" className="btn btn-warning" onClick={()=>this.onShow2('123') }>
                                Show message2
                            </button>                                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Handle;
