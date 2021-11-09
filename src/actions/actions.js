export const ADD_TODO = 'ADD_TODO'
export const COUNT_TODO = 'COUNT_TODO'

let nextTodoId = 0;
let nextCountId = 0;
let countProps = 0;

export function addTodo(text) {
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
   };
}

export function countTodo(isCount,text) {
   if(isCount===undefined){
      return {
         type: COUNT_TODO,
         id: nextCountId,
         idProps:countProps,
         text
      };
   }else if(isCount){
      return {
         type: COUNT_TODO,
         id: ++nextCountId,
         idProps:countProps,
         text
      };
   }
   else{
      return {
         type: COUNT_TODO,
         id: nextCountId,
         idProps: ++countProps,
         text
      };
   }
  
}
