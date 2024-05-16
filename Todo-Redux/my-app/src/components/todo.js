import React, { useState } from 'react';
import "./style.css"
import { useDispatch } from 'react-redux';
import {deleteTodo,updateTodo,changetfstate} from "../actions/index";
import check1 from "../assets/check.png"
import uncheck1 from "../assets/uncheck.png"
import clossee from "../assets/close.png"
function Todo(props){
    const [val,setval] = useState(props.todo.value)
    const [isInEditMode,setisInEditMode] = useState(false)
    const dispatch = useDispatch();


    const changeEditMode =()=>{
        setisInEditMode(!isInEditMode)
    }

    const handleChange = (e) => {
        setval(e.target.value)
    }

    const updateComponentValue = (id) =>{
        setisInEditMode(false)
        dispatch(updateTodo(id,val))
    }


        return (
            <>
            <div className='tableitself'>
                <div className='tab1'>
                    <img src= {props.todo.isDone?check1:uncheck1} width={30} onClick={() => dispatch(changetfstate(props.todo.id))}></img>
                </div>
                <div className='tab2'>
                        <label className={props.todo.isDone?'linecutted':'linecuttedoff'}>
                            {
                            isInEditMode ? 
                                <input
                                    type="text"
                                    defaultValue={val}
                                    onChange={handleChange}
                                    onKeyPress={event => event.key === 'Enter' && updateComponentValue(props.todo.id)}
                                />
                                :
                                <div onDoubleClick={changeEditMode}>
                                    {props.todo.value}
                                </div>
                            }
                            </label>
                </div>
                <div  className="tab3">
                    <img src= {clossee} width={12} onClick={() =>dispatch(deleteTodo(props.todo.id))}></img>
                </div>
                </div>
                
            </>
            
        );
    
    }
export default Todo;