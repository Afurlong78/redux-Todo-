import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todoList: []
}

const removeTodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      markTodoComplete: (state, action)=>{
        switch(state.todoList.done){
          case false : 
            return state.todoList.done === true;
          case true :
            return state.todoList.done === false;
          default : 
            return state;
        }
      }
  }
});

export const { markTodoComplete } = removeTodoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default removeTodoSlice.reducer