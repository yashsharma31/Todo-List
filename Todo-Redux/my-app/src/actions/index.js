export const addTodo = (value) =>{
    return {
        type :"add_todo",
        payload:{
            id: new Date().getTime().toString(),
            value:value,
            isDone:false
            
        }
    }
}
export const deleteTodo = (id) =>{
    return {
        type :"delete_todo",
        payload:{
            id: id
        }
    }
}

export const updateTodo = (id,value)=>{
    return{
        type:"update_todo",
        payload:{
            id:id,
            value:value
        }
    }
}

export const changetfstate = (id)=>{
    return{
        type:"change_tf_state",
        payload:{
            id:id
        }
    }
}

export const checkall = (tick) =>{
    return{
        type:"check_for_all",
        payload:{
            tick:tick
        }
    }
}

export const filterfor = (ftype) =>{
    return{
        type:"filter_for",
        payload:{
            ftype:ftype
        }
    }
}

export const clearcompleted = () =>{
    return{
        type:"clear_completed"
    }
}