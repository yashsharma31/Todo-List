const intialData = {
    filteredlist: [
    ],
    list:[
    ]
}
const todoReducers = (state=intialData, actions) => {
    
    switch(actions.type){
        case "Add_Todo":
            const{id,value,isDone} = actions.payload;
            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        value:value,
                        isDone:isDone
                    }
                ],
                filteredlist:[
                    ...state.list,
                    {
                        id:id,
                        value:value,
                        isDone:isDone
                    }
                ]
            }
        case "Delete_Todo":
            const newlist = state.list.filter((t) => t.id !== actions.payload.id)
            return {
                ...state,
                list:newlist,
                filteredlist:newlist
            }
            

        case "Update_Todo":
            let currentTodos = [];
            currentTodos = state.list;
            const new2ndlist=currentTodos.map(t =>{
                if(t.id==actions.payload.id){
                    t.value=actions.payload.value;
                }
                return t
                });
            return {
                ...state,
                list:new2ndlist,
                filteredlist:new2ndlist
            }
        case "Change_tf_state":
            let oldTodos = [];
            oldTodos = state.list;
            const newList = oldTodos.map((t) => {
                if (t.id === actions.payload.id) {
                    t.isDone = !t.isDone;
                }
                return t
            });
            console.log(newList)
            return {
                ...state,
                list:newList,
                filteredlist:newList,
            }

        case "Check_for_all":
            let gettodos = state.list;
            const newtodos = gettodos.map((t) => {
                t.isDone = true;
                return t
            });
            return{
                ...state,
                list:newtodos,
                filteredlist:newtodos
            }

        case "Uncheck_for_all":
            let getuntodos = state.list;
            const newuntodos = getuntodos.map((t) => {
                t.isDone = false;
                return t
            });
            return{
                ...state,
                list:newuntodos,
                filteredlist:newuntodos
            }
        case "Filter_All":
            let newallList = [];
            newallList = state.list.filter((t) => {
                    return t.id
            });
            return{
                ...state,
                filteredlist:newallList,
            }

        case "Filter_Active":
            let newactiveList = [];
            newactiveList = state.list.filter((t) => {
                if(t.isDone==false){
                    return t.id 
                }
            });
            
            return{
                ...state,
                filteredlist:newactiveList,
            }

        case "Filter_Completed":
            let newcompleteList = [];
            newcompleteList = state.list.filter((t) => {
                if(t.isDone==true){
                    return t.id 
                }
            });
            return{
                ...state,
                filteredlist:newcompleteList,
            }
        
        case "Clear_Completed":
            let newclearedList = [];
            newclearedList = state.list.filter((t) => {
                return !t.isDone
            });
            return{
                ...state,
                list:newclearedList,
                filteredlist:newclearedList
            }


        

            
        default: return state;
    }
    

}

export default todoReducers;