import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todoList: []
}

const removeTodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      markTodoComplete: (state, action)=>{
        state.todoList()
      }
  }
});

export const { markTodoComplete } = removeTodoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default removeTodoSlice.reducer