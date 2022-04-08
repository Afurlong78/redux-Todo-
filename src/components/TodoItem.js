import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'; 

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

const backgrounds = {
    'true' : `rgb(43, 180, 43)`,
    'false' :  `rgb(180, 43, 43)`
}

const StyledBtn = styled.button`
    height: 2rem;
    width:4rem;

    background-color: 
    color:black;
    border:none;
    border-radius:10px;

    font-weight:bold;
`

const TodoItem = ({name, done}) =>{

    const dispatch = useDispatch();

    const removeTodo = ( ) =>{ 
        dispatch()

    }

    return(
        <Todo>
            {name}
            <StyledBtn>
                Complete
            </StyledBtn>
        </Todo>
    );
}

export default TodoItem;