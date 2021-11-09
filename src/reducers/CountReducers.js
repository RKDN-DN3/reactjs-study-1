import { combineReducers } from 'redux'
import { COUNT_TODO } from '../actions/actions'

function todo(state, action) {
   switch (action.type) {
      case COUNT_TODO:
         return {
            id: action.id,
            idProps: action.idProps,
            text: action.text,
         }
      default:
         return state
   }
}
function todos(state = [], action) {
   switch (action.type) {
      case COUNT_TODO:
         return todo(undefined, action)         
      default:
         return {
            id: 0,
            idProps: 0,
            text: '',
         }
   }
}

const todoCountApp = combineReducers({
   todos
})
export default todoCountApp