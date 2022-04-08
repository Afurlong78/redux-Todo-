import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todoList: []
}

const removeTodoSlice = createSlice({
  name: 'markTodo',
  initialState,
  reducers: {
      markTodoComplete: (state, action)=>{
        if(state.todoList.done === false){
          return state.todoList.done === (!action.payload);
        }
        // switch(state.todoList.done){
        //   case false : 
        //     return state.todoList.done === !action.payload;
        //   case true :
        //     return state.todoList.done === action.payload;
        //   default : 
        //     return state;
        // }
      }
  }
});

export const { markTodoComplete } = removeTodoSlice.actions

export default removeTodoSlice.reducer