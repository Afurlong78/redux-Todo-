import React from 'react';
import styled from 'styled-components';
import './App.css';
import bg from './assets/bg.jpg';
import InputComponent from './components/Input';
import TodoItem from './components/TodoItem';

import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

const AppContainer = styled.div`
  height:100vh;
  width:100%;

  display:flex;
  justify-content:center;
  align-items:center;

  background-image:linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.1)),url(${bg});
  background-size:cover;

  color:white;
  font-size:2rem;
`

const TodoContainer = styled.div`
  height:50vh;
  width:30%;

  color:white;
  background-color:rgba(255, 255, 255, 0.2);

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  overflow-y:auto;
`

function App() {

  const todoList = useSelector(selectTodoList);

  return (
    <AppContainer>
      <InputComponent/>
      {/* todoList */}
        {/* completed/ yes or no */}
      {/* Input */}

      <TodoContainer>
          {
            todoList.map(item=>(
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
      </TodoContainer>
    </AppContainer>
  );
}

export default App;
