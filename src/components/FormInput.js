import React,{ Component, createRef, useRef} from 'react';


class FormInput extends Component{  
    constructor(props){
        super(props);
        this.txt1=React.createRef();
        this.txt2=React.createRef();
        this.state={
            datas:[ 
                {id:1, txt1:"namnn",txt2: '123'}                
            ],
            _isActive: true,
            _count:0
        }
        this.onsta
        //this.myRef= createRef();
        //this.addItem=this.addItem.bind(this);
    }
   
    addItem=()=>{     
        if(this.txt1.current.value.length===0||this.txt2.current.value.length===0)      {
            return;
        }  
        this.setState({
            datas:[...this.state.datas
                ,{id:this.state.datas.length+1,txt1:this.txt1.current.value,txt2:this.txt2.current.value}]
        })
        this.txt1.current.value="";
        this.txt2.current.value="";
    }
    onSetActive=()=>{
        this.setState({
            _isActive:!this.state._isActive
        });
    }
    count=()=>{
        this.setState({
            _count:this.state._count+1
        })
    }
    render(){
        var els= this.state.datas.map((data,index)=>{
            return ( <div key={data.id}>
                        <h5>txt1: {data.txt1} --- txt2: {data.txt2}</h5>
                    </div>)
        })
        return (
        <div className="ml-30" >
           <h1>Frorm Input. Count ({this.state._count})</h1>
           {els}
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Text1</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={this.txt1} />                    
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Text2</label>
            <input type="text" className="form-control" id="exampleInputPassword1" ref={this.txt2}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.addItem}>Submit</button>
            <button type="submit" className="btn btn-secondary" onClick={this.onSetActive}>Active: {this.state._isActive===true?'True':'False'}</button>
            <button type="submit" className="btn btn-primary" onClick={this.count}>Count</button>
            
        </div>
        )
    }
}
export default FormInput;
