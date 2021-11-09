import React, { Component } from 'react'

export default class TodoList extends Component {
   render() {
      return (
         <ul>
            {this.props.todos.map(todo =>
               <div key={todo.id}>
                  <h5>txt1: {todo.text.txt1} --- txt2: {todo.text.txt2}</h5>
               </div>
            )}
         </ul>
      )
   }
}