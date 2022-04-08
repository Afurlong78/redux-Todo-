import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'; 
import { markTodoComplete } from '../features/removeTodoSlice';


const Todo = styled.h3`
    font-size:1rem;
    color:black;
    background-color:white;
    width:70%;
    height:3rem;
    border-radius:10px;

    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:5px;
`


const StyledBtn = styled.button`
    height: 2rem;
    width:4rem;

    background-color: 
    color:black;
    border:none;
    border-radius:10px;

    font-weight:bold;
`

const TodoItem = ({ name, id, done }) =>{

    const dispatch = useDispatch();

    const markComplete = ( ) =>{ 
        
        dispatch(markTodoComplete({
            done: !done
        }))

    }

    return(
        <Todo>
            {name}
            <StyledBtn onClick={markComplete}>
                Complete
            </StyledBtn>
        </Todo>
    );
}

export default TodoItem;