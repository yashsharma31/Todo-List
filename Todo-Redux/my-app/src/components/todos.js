import React, {useState} from 'react';
import AddTodo from "./addtodo"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {filterfor,clearcompleted} from "../actions/index";
import Todo from "./todo"
import Footer from './footer';

function Todos(props) { 

    const listdata = useSelector((state)=> state.todoReducers.filteredlist)
    const originallist = useSelector((state)=> state.todoReducers.list)
    const filterposition = useSelector((state)=> state.todoReducers.filterpos)
    const dispatch = useDispatch();
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
                                className={filterposition=="all" ? "allbtn" : "allbtn2"}
                                onClick={() => {dispatch(filterfor("all"))}}
                                name="all"> All
                            </label>
                            <label
                                className={filterposition=="active" ? "allbtn" : "allbtn2"}
                                onClick={() => {dispatch(filterfor("active"))}}
                                name="pending">Active
                            </label>
                            <label
                                className={filterposition=="completed" ? "allbtn" : "allbtn2"}
                                onClick={() => {dispatch(filterfor("completed"))}}
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