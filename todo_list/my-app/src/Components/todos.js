import React, { Component } from 'react';
import "./style.css"
import Todo from './todo';
import AddTodo from './addtodo.js';

class Todos extends Component {
    constructor(props){  
        super(props);   
        this.state = {
            addTodoValue: "",
            todos: [],
            filterpos:"all"
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.addNewTodo = this.addNewTodo.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    } 

    //Local helper method to get date
    getTime() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    clickHandler = (pos) => {
    if (pos === "all") {
        this.setState({ filterpos: "all" });
    } 
    else if (pos === "active") {
        this.setState({ filterpos: "active" });
    } 
    else if (pos === "completed") {
        this.setState({ filterpos: "completed" });
    } 
    else {
        this.setState({ filterpos: "all" }); 
    }
    this.forceUpdate(); 
    };

    //method called from Todo component
    handleDelete = todo => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        currentTodos = this.state.todos;
        newList = this.state.todos.filter((t) => {
            return t.id !== todo
        });

        activelist = newList.filter((t) => {
            return !t.isDone 
        });

        this.setState({ todos: newList});
    }

    clearcomplete = () => {
        let newList = [];
        newList = this.state.todos.filter((t) => {
            return !t.isDone
        });

        this.setState({ todos: newList});
    }

    handleDone = todo => {
        let currentTodos = [];
        let newList = [];
        currentTodos = [...this.state.todos];
        newList = currentTodos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });

        this.setState({todos:newList});
    }

    //method called from AddTodo component
    addNewTodo = value => {
        let currentTodos = [];
        let newList = [];
        if (value) {
            currentTodos = [...this.state.todos];
            currentTodos.push(
                {
                    id: this.getTime(),
                    value: value,
                    isDone: false
                }
            );
            newList =  currentTodos.filter((t) => {
                return t.id 
        });
            this.setState({ addTodoValue: "", todos:newList })
        } else {
            console.log("Please Add Todo Text");
        }
    }

    setUpdate= (text,key) => {{
        let currentTodos = [];
        currentTodos = this.state.todos;
        currentTodos.map(t =>{
            if(t.id==key){
                t.value=text;
            }
        });
        this.setState({
            todos:currentTodos
        });
    }}

    checkall=()=>{{
        let currentTodos = [];
        currentTodos = this.state.todos;
        for (const i of currentTodos) {
            i.isDone=true;
          }
        this.setState({
            todos:currentTodos
        });
    }}

    uncheckall=()=>{{
        let currentTodos = [];
        currentTodos = this.state.todos;
        for (const i of currentTodos) {
            i.isDone=false;
          }
        this.setState({
            todos:currentTodos
        });
    }}

    checkforactiv=()=>{
        let activetodo = [];
        let total_todos= [];
        total_todos = this.state.todos;
        activetodo =  this.state.todos.filter((t) => {
            return !t.isDone
        });
        if (activetodo.length==0 && total_todos.length!=0 ){
                return true
        }
        else{
                return false
        }
    }


    render() {
        var activenumber = 0;
        this.state.todos.forEach((element) => {
          if (element.isDone === false) {
            activenumber++; 
          }
        });

        var showlist = this.state.todos.filter(function (todo) {
            switch (this.state.filterpos){
              case "active": 
                return !todo.isDone;
              case "completed": 
                return todo.isDone;
              default: 
                return true;
            }
        }, this);

        var positionactive = this.state.filterpos;
    
    
        return (
            <div className='table_style'>
            <div className="table">
                    <div className='todos_table'>
                        <div className="txt1table">
                            <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} checkall={this.checkall} uncheckall={this.uncheckall} chkforactv={this.checkforactiv}/>
                        </div>
                    </div>

                        
                    <div className='footerandtable'>
                        {showlist.map((todo, index) => (
                        <div className='todos_table_down' key={todo.id}>
                            <Todo index={index+1} todo={todo} 
                            fooDelete={this.handleDelete} 
                            fooDoneDone={this.handleDone} 
                            setUpdate={this.setUpdate} 
                             />
                        </div>
                        
                    ))}
            </div>
            <div className={this.state.todos.length>=1 ? 'rfooter' : "rfooteroff"}>
                <div className='whole-footer'>
                    <div className='decor-outer'>
                    <div className='footer'>
                        <div className='left_footer'>
                        <label>{activenumber} items left </label>
                        </div>
                        <div className='middle_footer'>
                            <label
                                className={positionactive==="all" ? "allbtn" : "allbtn2"}
                                onClick={() => {this.clickHandler("all")}}
                                name="all"> All
                            </label>
                            <label
                                className={positionactive==="active" ? "allbtn" : "allbtn2"}
                                onClick={() => {this.clickHandler("active")}}
                                name="pending">Active
                            </label>
                            <label
                                className={positionactive==="completed" ? "allbtn" : "allbtn2"}
                                onClick={() => {this.clickHandler("completed")}}
                                name="completed">Completed
                            </label>
                        </div>
                        <div className={(this.state.todos.length-activenumber)>=1 ? "right_footer" : "right_footeroff"}>
                            <label  onClick={() => this.clearcomplete()}>Clear completed</label>
                        </div>
                    </div>
                    </div>
                            <div className='decor1'></div>
                            <div className='decor2'></div>
                    </div>
            </div>
            </div>
                
            </div>
            
        )};
    }

export default Todos;