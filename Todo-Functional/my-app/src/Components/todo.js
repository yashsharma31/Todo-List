import React, { useState } from 'react';
import "./style.css"
import check1 from "../assets/check.png"
import uncheck1 from "../assets/uncheck.png"
import clossee from "../assets/close.png"
function Todo(props){
    const [val,setval] = useState(props.todo.value)
    const [isInEditMode,setisInEditMode] = useState(false)


    const changeEditMode =()=>{
        setisInEditMode(!isInEditMode)
    }

    const handleChange = (e) => {
        setval(e.target.value)
    }

    const updateComponentValue = (id) =>{
        setisInEditMode(false)
        props.setUpdate(val,id)
    }


        return (
            <>
            <div className='tableitself'>
                <div className='tab1'>
                    <img src= {props.todo.isDone?check1:uncheck1} width={30} onClick={() => props.fooDoneDone(props.todo)}></img>
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
                    <img src= {clossee} width={12} onClick={() =>props.fooDelete(props.todo.id)}></img>
                </div>
                </div>
                
            </>
            
        );
    
    }
export default Todo;