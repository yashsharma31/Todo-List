import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo,deleteTodo} from "../actions/index";


const Todotest1 = () => {

  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();

  return (
    <>
    <div className='test1outer'>
    <h1>hello</h1>
    <input type="text" placeholder="add items here.."
    value={inputData}
    onChange={(event) => setInputData(event.target.value)}
    />
    <button className='buttonadd1' onClick={() => {dispatch(addTodo(inputData));console.log(inputData)}}></button>
    </div>
    </>
  )
}

export default Todotest1