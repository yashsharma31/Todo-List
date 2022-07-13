import React, {useState} from 'react';
import AddTodo from "./addtodo"
import Todo from "./todo"
import Footer from './footer';

function Todos(props) { 

    const [addTodoValue,setaddTodoValue] = useState("")
    const [todos,settodos] = useState([
    ])
    const [filterpos,setfilterpos] = useState("all")

    const getTime= () => {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    const clickHandler = (pos) => {
        if (pos === "all") {
            setfilterpos("all");
        } 
        else if (pos === "active") {
            setfilterpos("active");
        } 
        else if (pos === "completed") {
            setfilterpos("completed")
        } 
        else {
            setfilterpos("all");
        }
        };


    const handleDelete = todo => {
        let newList = [];
        newList = todos.filter((t) => {
            return t.id !== todo
        });
        settodos(newList)
    }

    const clearcomplete = () => {
        let newList = []; 
        newList = todos.filter((t) => {
            return !t.isDone
        });
        settodos(newList)
    }

    const handleDone = todo => {
        let newList = [];
        newList = [...todos].map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        settodos(newList);
    }

    const addNewTodo = value => {
        let currentTodos = [];
        let newList = [];
        if (value) {
            currentTodos = [...todos];
            currentTodos.push(
                {
                    id: getTime(),
                    value: value,
                    isDone: false
                }
            );
        newList =  currentTodos.filter((t) => {
                return t.id 
        });
        setaddTodoValue("")
        settodos(newList)
        } else {
            console.log("Please Add Todo Text");
        }
    }

    const setUpdate= (text,key) => {{
        let currentTodos = [];
        currentTodos = todos;
        currentTodos.map(t =>{
            if(t.id==key){
                t.value=text;
            }
            return t;
        });
        settodos(currentTodos)
    }}

    const checkall=()=>{{
        let currentTodos = [];
        let newList = [];
        currentTodos = [...todos];
        newList = currentTodos.map(t =>{
            t.isDone=true;
            return t;
        });
        settodos(newList)
    }}
    const uncheckall=()=>{{
        let currentTodos = [];
        let newList = [];
        currentTodos = [...todos];
        
        newList = currentTodos.map(t =>{
            t.isDone=false;
            return t;
        });
        settodos(newList)
    }}

    const checkforactiv=()=>{{
        let activetodo = [];
        let total_todos= [];
        total_todos = todos;
        activetodo = todos.filter((t) => {
            return !t.isDone
        });
        if (activetodo.length==0 && total_todos.length!=0 ){
                return true
        }
        else{
                return false
        }
    }}

    var activenumber = 0;
    todos.forEach((element) => {
          if (element.isDone === false) {
            activenumber++; 
          }
        });

    var showlist = todos.filter(function (todo) {
        switch (filterpos){
            case "active": 
            return !todo.isDone;
            case "completed": 
            return todo.isDone;
            default: 
            return true;
        }
    }, this);

    var positionactive = filterpos;

    
    return (
        <div className='table_style'>
        <div className="table">
            <div className='todos_table'>
                <div className="txt1table">
                    <AddTodo fooAddTodo={addNewTodo} addTodoValue={addTodoValue} checkall={checkall} uncheckall={uncheckall} chkforactv={checkforactiv}/>
                </div>
            </div>

                
            <div className='footerandtable'>
                {showlist.map((todo, index) => (
                <div className='todos_table_down' key={todo.id}>
                    <Todo index={index+1} todo={todo} 
                        fooDelete={handleDelete} 
                        fooDoneDone={handleDone} 
                        setUpdate={setUpdate} 
                    />
                </div>
            ))}
        </div>
        <div className={todos.length>=1 ? 'rfooter' : "rfooteroff"}>
                <div className='whole-footer'>
                    <div className='decor-outer'>
                    <div className='footer'>
                        <div className='left_footer'>
                        <label>{activenumber} items left </label>
                        </div>
                        <div className='middle_footer'>
                            <label
                                className={positionactive==="all" ? "allbtn" : "allbtn2"}
                                onClick={() => {clickHandler("all")}}
                                name="all"> All
                            </label>
                            <label
                                className={positionactive==="active"? "allbtn" : "allbtn2"}
                                onClick={() => {clickHandler("active")}}
                                name="pending">Active
                            </label>
                            <label
                                className={positionactive==="completed" ? "allbtn" : "allbtn2"}
                                onClick={() => {clickHandler("completed")}}
                                name="completed">Completed
                            </label>
                        </div>
                        <div className={(todos.length-activenumber)>=1 ? "right_footer" : "right_footeroff"}>
                            <label  onClick={() => clearcomplete()}>Clear completed</label>
                        </div>
                    </div>
                    </div>
                            <div className='decor1'></div>
                            <div className='decor2'></div>
                    </div>
        </div>
        </div>
        <Footer/>
        
        
    </div>
        
    );
    
}

export default Todos;