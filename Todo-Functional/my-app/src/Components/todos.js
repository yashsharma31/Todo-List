import React, {useState} from 'react';
import AddTodo from "./addtodo"
import Todo from "./todo"
import Footer from './footer';

function Todos(props) { 

    const [addTodoValue,setaddTodoValue] = useState("")
    const [todos,settodos] = useState([
    ])
    const [filtered,setfiltered] = useState([
    ])
    const [filteredactive,setfilteredactive] = useState([
        
    ])
    const [filtersposition] = useState({
            allf : true,
            activef : false,
            completedf : false,
    })

    const getTime= () => {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    const handleDelete = todo => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        currentTodos = todos;
        newList = todos.filter((t) => {
            return t.id !== todo
        });

        activelist = newList.filter((t) => {
            return !t.isDone 
        });
        settodos(newList)
        setfiltered(newList)
        setfilteredactive(activelist)

    }
    const clearcomplete = todo => {
        let currentTodos = [];
        let newList = []; 
        currentTodos = todos;
        newList = todos.filter((t) => {
            return !t.isDone
        });
        settodos(newList)
        setfiltered(newList)
        setfilteredactive(newList)
    }
    const filteractive = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = todos;
        newList = todos.filter((t) => {
            if(t.isDone==true){
                return t.id 
            }
            
        });
        setfiltered(newList)
    }
    const filternotactive = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = todos;
        newList = todos.filter((t) => {
            if(t.isDone==false){
                return t.id 
            }
            
        });
        setfiltered(newList)
    }
    const filterall = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = todos;
        newList = todos.filter((t) => {
                return t.id 
            
        });
        setfiltered(newList)
    }

    const handleDone = todo => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        currentTodos = [...todos];
        newList = currentTodos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        activelist = newList.filter((t) => {
            return !t.isDone 
        });

        setfiltered(newList)
        setfilteredactive(activelist)
    }

    const addNewTodo = value => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
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
        activelist = newList.filter((t) => {
            return !t.isDone 
        });
        setaddTodoValue("")
        settodos(newList)
        setfiltered(newList)
        setfilteredactive(activelist)
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
        });
        settodos(currentTodos)
        setfiltered(currentTodos)
    }}

    const checkall=()=>{{
        let currentTodos = [];
        let activelist = [];
        currentTodos = todos;
        for (const i of currentTodos) {
            i.isDone=true;
          }
        activelist = currentTodos.filter((t) => {
            return !t.isDone 
        });
        setfiltered(currentTodos)
        settodos(currentTodos)
        setfilteredactive(activelist)
    }}
    const uncheckall=()=>{{
        let currentTodos = [];
        let activelist = [];
        currentTodos = todos;
        for (const i of currentTodos) {
            i.isDone=false;
          }
        activelist = currentTodos.filter((t) => {
            return !t.isDone 
        });
        setfiltered(currentTodos)
        settodos(currentTodos)
        setfilteredactive(activelist)
    }}

    const checkforactiv=()=>{{
        let activetodo = [];
        let total_todos= [];
        total_todos = todos;
        activetodo = filteredactive;
        if (activetodo.length==0 && total_todos.length!=0 ){
                return true
        }
        else{
                return false
        }
    }}
    const clicktrue=(sts)=>{{
        if(sts==1){
            filtersposition.allf=true;
            filtersposition.activef=false;
            filtersposition.completedf=false;
        }
        else if(sts==2){
            filtersposition.allf=false;
            filtersposition.activef=true;
            filtersposition.completedf=false;
        }
        else{
            filtersposition.allf=false;
            filtersposition.activef=false;
            filtersposition.completedf=true;
        }
    
    }}

    
    return (
        <div className='table_style'>
        <div className="table">
            <div className='todos_table'>
                <div className="txt1table">
                    <AddTodo fooAddTodo={addNewTodo} addTodoValue={addTodoValue} checkall={checkall} uncheckall={uncheckall} chkforactv={checkforactiv}/>
                </div>
            </div>

                
            <div className='footerandtable'>
                {filtered.map((todo, index) => (
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
                        <label>{filteredactive.length} items left </label>
                        </div>
                        <div className='middle_footer'>
                            <label
                                className={filtersposition.allf ? "allbtn" : "allbtn2"}
                                onClick={() => {filterall();clicktrue(1)}}
                                name="all"> All
                            </label>
                            <label
                                className={filtersposition.activef ? "allbtn" : "allbtn2"}
                                onClick={() => {filternotactive();clicktrue(2)}}
                                name="pending">Active
                            </label>
                            <label
                                className={filtersposition.completedf ? "allbtn" : "allbtn2"}
                                onClick={() => {filteractive();clicktrue(3)}}
                                name="completed">Completed
                            </label>
                        </div>
                        <div className={(todos.length-filteredactive.length)>=1 ? "right_footer" : "right_footeroff"}>
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