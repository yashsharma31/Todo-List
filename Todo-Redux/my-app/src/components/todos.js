import React, {useState} from 'react';
import AddTodo from "./addtodo"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {filterall,filteractive,filtercompleted,clearcompleted} from "../actions/index";
import Todo from "./todo"
import Footer from './footer';

function Todos(props) { 

    const listdata = useSelector((state)=> state.todoReducers.filteredlist)
    const originallist = useSelector((state)=> state.todoReducers.list)
    const activelist= useSelector((state)=> state.todoReducers.activelist)
    const dispatch = useDispatch();

    
    const [filtersposition] = useState({
            allf : true,
            activef : false,
            completedf : false,
    })

    const checkforactiv=()=>{{
        let activetodo = [];
        let total_todos= [];
        total_todos = originallist;
        activetodo = originallist.filter((t) => {
            return !t.isDone 
        });
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
                    <AddTodo chkforactv={checkforactiv}/>
                </div>
            </div>

                
            <div className='footerandtable'>
                {listdata.map((todo, index) => (
                <div className='todos_table_down' key={todo.id}>
                    <Todo index={index+1} todo={todo}/>
                </div>
            ))}
        </div>
        <div className={originallist.length>=1 ? 'rfooter' : "rfooteroff"}>
                <div className='whole-footer'>
                    <div className='decor-outer'>
                    <div className='footer'>
                        <div className='left_footer'>
                        <label>{originallist.filter((t) => {return !t.isDone}).length} items left </label>
                        </div>
                        <div className='middle_footer'>
                            <label
                                className={filtersposition.allf ? "allbtn" : "allbtn2"}
                                onClick={() => {dispatch(filterall());clicktrue(1)}}
                                name="all"> All
                            </label>
                            <label
                                className={filtersposition.activef ? "allbtn" : "allbtn2"}
                                onClick={() => {dispatch(filteractive());clicktrue(2)}}
                                name="pending">Active
                            </label>
                            <label
                                className={filtersposition.completedf ? "allbtn" : "allbtn2"}
                                onClick={() => {dispatch(filtercompleted());clicktrue(3)}}
                                name="completed">Completed
                            </label>
                        </div>
                        <div className={(originallist.length-listdata.filter((t) => {return !t.isDone}).length)>=1 ? "right_footer" : "right_footeroff"}>
                            <label  onClick={() => dispatch(clearcompleted())}>Clear completed</label>
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