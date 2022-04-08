import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      saveTodo: (state, action)=>{
          state.todoList.push(action.payload)
      },
      removeTodo: (state, action)=>{
        state.todoList.filter()
      }
  }
});

export const { saveTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer