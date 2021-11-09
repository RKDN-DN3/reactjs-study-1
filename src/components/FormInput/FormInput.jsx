import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/actions'

import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'


class FormInput extends Component{ 
    constructor(props){
        super(props);
    } 
    render(){
        const { dispatch, visibleTodos } = this.props      
        return (
            <div className="ml-30 col-5" >
                <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
                <TodoList todos = {visibleTodos}/>
            </div>
        )
    }   
}
function select(state) {
    return {
       visibleTodos: state.todos
    }
 }
export default connect(select)(FormInput);
