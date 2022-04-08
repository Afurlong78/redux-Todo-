import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import removeTodo from '../features/removeTodoSlice';


export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
});
