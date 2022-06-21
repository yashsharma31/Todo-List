import React,{useState} from 'react';
import "./style.css"
import drop1 from "../assets/drop1.png"
import drop2 from "../assets/drop2.png"

function AddTodo(props) {
    const [value,setvalue] = useState(props.addTodoValue)


    const handleChange = (e) => {
        setvalue(e.target.value);
    }

    const clearInput = () => {
        document.getElementById("todoValue").value = "";
        setvalue("");
    }
    const addTodo = () => {
        props.fooAddTodo(value);
        clearInput();
    }


    
    
    return (
        <>
        <div className='outercontainer'>
        <div className='heading'><p>todos
            
            </p></div>
        <div className="todotaskbar">
            <div className='todotaskbar-imgs'>
                <img src= {props.chkforactv()?drop2:drop1} onClick={() => {props.chkforactv()?props.uncheckall():props.checkall()}}></img>
            </div>
            <input type="text" className="formm" id="todoValue" placeholder="What needs to be done?" onChange={handleChange} 
            onKeyPress={event => event.key === 'Enter' && addTodo()}
            />
        </div>
        
        </div>
        
        </>
    );

}
    

    

export default AddTodo;