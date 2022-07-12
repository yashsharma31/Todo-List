import React, { Component } from 'react';
import "./style.css"
import check1 from "../assets/check.png"
import uncheck1 from "../assets/uncheck.png"
import clossee from "../assets/close.png"
class Todo extends Component {

    state={
        val: this.props.todo.value,
        isInEditMode: false

    }

    changeEditMode=()=>{
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    handleChange = (e) => {
        this.setState({
            val: e.target.value
        });
    }

    updateComponentValue = (id) =>{
        this.setState({
            isInEditMode: false,
        })
        this.props.setUpdate(this.state.val,id)
    }

    render() {
        return (
            <>
            <div className='tableitself'>
                <div  className="tab1">
                    <img src= {this.props.todo.isDone?check1:uncheck1} width={30} onClick={() => this.props.fooDoneDone(this.props.todo)}></img>
                </div>
                <div className='tab2'>
                    <label className={this.props.todo.isDone?'linecutted':'linecuttedoff'}>
                        {
                        this.state.isInEditMode ? 
                            <input
                                type="text"
                                defaultValue={this.state.val}
                                onChange={this.handleChange}
                                onKeyPress={event => event.key === 'Enter' && this.updateComponentValue(this.props.todo.id)}
                            />
                            :
                            <div onDoubleClick={this.changeEditMode}>
                                {this.props.todo.value}
                            </div>
                        }
                    </label>
                    
                </div>
                <div  className="tab3">
                    <img src= {clossee} width={12} onClick={() =>this.props.fooDelete(this.props.todo.id)}></img>
                    
                </div>
                </div>
                
            </>
            
        );
    }


}


export default Todo;