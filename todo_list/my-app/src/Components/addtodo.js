import React, { Component } from 'react';
import "./style.css"
import drop1 from "../assets/drop1.png"
import drop2 from "../assets/drop2.png"

class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          clicks:1,
          show:true
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    
    state = {
        defaultValue: "",
        value: this.props.addTodoValue,
    }

    handleChange = (e) => {
        //Updating local component state
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //Clear existing value in input
        document.getElementById("todoValue").value = "";
        
        //Updating local component state
        this.setState({value:""});
    }

    addTodo = () => {
        //Call method reference in Todos component using props
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }
    countincc = (count) => {
        count=count+1
        console.log(count)
        return count
    }

    render() {
        return (
            <>
            <div className='outercontainer'>
            <div className='heading'><p>todos
                
                </p></div>
            <div className="todotaskbar">
                <div className='todotaskbar-imgs'>
                <img src= {this.props.chkforactv()?drop2:drop1} onClick={() => {this.props.chkforactv()?this.props.uncheckall():this.props.checkall()}}></img>
                </div>
                <input type="text" className="formm" id="todoValue" placeholder="What needs to be done?" onChange={this.handleChange} 
                onKeyPress={event => event.key === 'Enter' && this.addTodo()}
                />
            </div>
            
            </div>
            
            </>
        );
    }
     
}

export default AddTodo;