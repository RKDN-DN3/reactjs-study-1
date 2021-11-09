import React, { Component } from 'react'

export default class AddTodo extends Component {
   render() {
      return (
         <div>
            <h1>Form Input</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Text1</label>
                <input type="text" className="form-control" ref='txtInput1' />                    
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Text2</label>
                <input type="text" className="form-control" ref='txtInput2'/>
            </div>            
            <button type="submit" className="btn btn-primary" onClick={this.addItem}>Submit</button>
         </div>
      )
   }
   addItem=()=>{ 
      const node1 = this.refs.txtInput1
      const node2 = this.refs.txtInput2
      const text1 = node1.value.trim()    
      const text2 = node2.value.trim()  
      const obj={
         txt1:text1,
         txt2:text2
      }   
      this.props.onAddClick(obj)     
      node1.value="";
      node2.value="";
   }  
}