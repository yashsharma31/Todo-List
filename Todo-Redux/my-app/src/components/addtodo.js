import React,{useState} from 'react';
import "./style.css"
import drop1 from "../assets/drop1.png"
import drop2 from "../assets/drop2.png"
import { useDispatch } from 'react-redux';
import {addTodo,checkall,uncheckall} from "../actions/index";

const AddTodo = (props) => {
    const [value,setvalue] = useState('')
    const dispatch = useDispatch();


    const handleChange = (e) => {
        setvalue(e.target.value);
    }

    const clearInput = () => {
        document.getElementById("todoValue").value = "";
        setvalue("");
    }

    
    
    return (
        <>
        <div className='outercontainer'>
        <div className='heading'><p>todos
            
            </p></div>
        <div className="todotaskbar">
            <div className='todotaskbar-imgs'>
                <img src= {props.chkforactv()?drop2:drop1} onClick={() => {props.chkforactv()?dispatch(uncheckall()):dispatch(checkall())}}></img>
            </div>
            <input type="text" className="formm" id="todoValue" placeholder="What needs to be done?" onChange={handleChange} 
            onKeyPress={event => event.key === 'Enter' && dispatch(addTodo(value)) && clearInput()}
            />
        </div>
        
        </div>
        
        </>
    );

}
    

    

export default AddTodo;