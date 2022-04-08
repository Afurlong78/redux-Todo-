import React, { useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux'; 
import { saveTodo } from '../features/todoSlice';

const FormContainer = styled.div`
    height:50vh;
    width:50%;

    display:flex;
    justify-content:flex-start;
    align-items:center;

    flex-direction:column;
`

const FormRow = styled.div`
    display:flex:
    justify-content:center;
    align-items:center;
`

const StyledInput = styled.input`
    height:3rem;
    width:20rem;

    border:1px solid white;
    background-color:rgba(255, 255, 255, 0.603);

    font-size:1rem;
    font-weight:bold;
`

const StyledBtn = styled.button`
    height:3.25rem;
    width: 5rem;
    background-color:white;
    color:black;

    border:none;
`

const TodoHeader = styled.h1`
    font-size:5rem;
    color:white;
    font-weight:bold;
`

const InputComponent = ()=>{

    const [input, setInput]=useState('');
    const dispatch = useDispatch()

    const addTodo=()=>{
        console.log(`adding ${input}`)

        dispatch(saveTodo({
            item:input, 
            done:false,
            id: Date.now()
        }))
    };

    return(
        <FormContainer>
            <TodoHeader>
                Submit A Todo
            </TodoHeader>
            <FormRow>
            <StyledInput value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <StyledBtn onClick={addTodo}>
                <strong>Submit</strong>
            </StyledBtn>
            </FormRow>
        </FormContainer>
    );
}

export default InputComponent;