import React, { Component } from 'react';
import "./style.css"
import Todo from './todo';
import AddTodo from './addtodo.js';

class Todos extends Component {
    constructor(props){  
        super(props);   
        this.state = {
            addTodoValue: "",
            todos: [
            ],
            filtered: [
            ],
            filteredactive:[
            ],
            filtersposition:{
                allf : true,
                activef : false,
                completedf : false,
            },
            countactive:0
        }
        this.lenleftitems = this.lenleftitems.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.addNewTodo = this.addNewTodo.bind(this);
        this.setUpdate = this.setUpdate.bind(this);  
        this.checkall = this.checkall.bind(this); 
        this.uncheckall = this.uncheckall.bind(this); 
        this.filteractive = this.filteractive.bind(this);
        this.filternotactive = this.filternotactive.bind(this);
        this.filterall = this.filterall.bind(this);
        this.checkforactiv = this.checkforactiv.bind(this);
    } 

    //Local helper method to get date
    getTime() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

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
        this.setState({ filtered: newList});
        this.setState({filteredactive:activelist })
    }

    clearcomplete = todo => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        currentTodos = this.state.todos;
        newList = this.state.todos.filter((t) => {
            return !t.isDone
        });

        this.setState({ todos: newList});
        this.setState({ filtered: newList});
        this.setState({ filteredactive:newList })
    }

    filteractive = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = this.state.todos;
        newList = this.state.todos.filter((t) => {
            if(t.isDone==true){
                return t.id 
            }
            
        });
        this.setState({ filtered: newList });
    }
    filternotactive = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = this.state.todos;
        newList = this.state.todos.filter((t) => {
            if(t.isDone==false){
                return t.id 
            }
            
        });
        this.setState({ filtered: newList });
    }
    filterall = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = this.state.todos;
        newList =  this.state.todos.filter((t) => {
                return t.id 
            
        });
        this.setState({ filtered: newList });
    }


    handleDone = todo => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        currentTodos = [...this.state.todos];
        newList = currentTodos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        activelist = newList.filter((t) => {
            return !t.isDone 
        });

        this.setState({filtered:newList});
        this.setState({filteredactive:activelist })
    }

    //method called from AddTodo component
    addNewTodo = value => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
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
        activelist = newList.filter((t) => {
            return !t.isDone 
        });
            this.setState({ addTodoValue: "", filtered:newList })
            this.setState({ addTodoValue: "", todos:newList })
            this.setState({ addTodoValue: "", filteredactive:activelist })
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
        this.setState({
            filtered:currentTodos
        });
    }}

    checkall=()=>{{
        let currentTodos = [];
        let activelist = [];
        currentTodos = this.state.todos;
        for (const i of currentTodos) {
            i.isDone=true;
          }
        activelist = currentTodos.filter((t) => {
            return !t.isDone 
        });
        this.setState({
            filtered:currentTodos
        });
        this.setState({
            todos:currentTodos
        });
        this.setState({filteredactive:activelist })
    }}

    uncheckall=()=>{{
        let currentTodos = [];
        let activelist = [];
        currentTodos = this.state.todos;
        for (const i of currentTodos) {
            i.isDone=false;
          }
        activelist = currentTodos.filter((t) => {
            return !t.isDone 
        });
        this.setState({
            filtered:currentTodos
        });
        this.setState({
            todos:currentTodos
        });
        this.setState({filteredactive:activelist })
    }}

    lenleftitems(){
        let currentTodos = [];
        let newList = [];
        currentTodos = this.state.todos;
        newList =  this.state.todos.filter((t) => {
            if(t.isDone==false){
                return t.id 
            }
            
        });
        this.setState({ countactive: newList.length });
        
    }


    checkforactiv(){
        let activetodo = [];
        let total_todos= [];
        total_todos = this.state.todos;
        activetodo = this.state.filteredactive;
        if (activetodo.length==0 && total_todos.length!=0 ){
                return true
        }
        else{
                return false
        }
    }
    clicktrue=(sts)=>{{
        if(sts==1){
            this.state.filtersposition.allf=true;
            this.state.filtersposition.activef=false;
            this.state.filtersposition.completedf=false;
        }
        else if(sts==2){
            this.state.filtersposition.allf=false;
            this.state.filtersposition.activef=true;
            this.state.filtersposition.completedf=false;
        }
        else{
            this.state.filtersposition.allf=false;
            this.state.filtersposition.activef=false;
            this.state.filtersposition.completedf=true;
        }

    }}




    render() {
        return (
            <div className='table_style'>
            <div className="table">
                    <div className='todos_table'>
                        <div className="txt1table">
                            <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} checkall={this.checkall} uncheckall={this.uncheckall} chkforactv={this.checkforactiv}/>
                        </div>
                    </div>

                        
                    <div className='footerandtable'>
                        {this.state.filtered.map((todo, index) => (
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
                        <label>{this.state.filteredactive.length} items left </label>
                        </div>
                        <div className='middle_footer'>
                            <label
                                className={this.state.filtersposition.allf ? "allbtn" : "allbtn2"}
                                onClick={() => {this.filterall();this.clicktrue(1)}}
                                name="all"> All
                            </label>
                            <label
                                className={this.state.filtersposition.activef ? "allbtn" : "allbtn2"}
                                onClick={() => {this.filternotactive();this.clicktrue(2)}}
                                name="pending">Active
                            </label>
                            <label
                                className={this.state.filtersposition.completedf ? "allbtn" : "allbtn2"}
                                onClick={() => {this.filteractive();this.clicktrue(3)}}
                                name="completed">Completed
                            </label>
                        </div>
                        <div className={(this.state.todos.length-this.state.filteredactive.length)>=1 ? "right_footer" : "right_footeroff"}>
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