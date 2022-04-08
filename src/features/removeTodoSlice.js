import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todoList: []
}

const removeTodoSlice = createSlice({
  name: 'markTodo',
  initialState,
  reducers: {
      markTodoComplete: (state, action)=>{
        switch(action.payload){
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

export default removeTodoSlice.reducer