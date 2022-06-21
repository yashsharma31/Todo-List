export const addTodo = (value) =>{
    return {
        type :"Add_Todo",
        payload:{
            id: new Date().getTime().toString(),
            value:value,
            isDone:false
            
        }
    }
}
export const deleteTodo = (id) =>{
    return {
        type :"Delete_Todo",
        payload:{
            id: id
        }
    }
}

export const updateTodo = (id,value)=>{
    return{
        type:"Update_Todo",
        payload:{
            id:id,
            value:value
        }
    }
}

export const changetfstate = (id)=>{
    return{
        type:"Change_tf_state",
        payload:{
            id:id
        }
    }
}

export const checkall = () =>{
    return{
        type:"Check_for_all"
    }
}

export const uncheckall = () =>{
    return{
        type:"Uncheck_for_all"
    }
}

export const filterall = () =>{
    return{
        type:"Filter_All"
    }
}
export const filteractive = () =>{
    return{
        type:"Filter_Active"
    }
}
export const filtercompleted = () =>{
    return{
        type:"Filter_Completed"
    }
}

export const clearcompleted = () =>{
    return{
        type:"Clear_Completed"
    }
}