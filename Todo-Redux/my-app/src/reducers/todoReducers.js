const intialData = {
    filteredlist: [
    ],
    list:[
    ],
    filterpos:"all"
}
const todoReducers = (state=intialData, actions) => {
    
    switch(actions.type){
        case "add_todo":
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
        case "delete_todo":
            const newlist = state.list.filter((t) => t.id !== actions.payload.id)
            return {
                ...state,
                list:newlist,
                filteredlist:newlist
            }
            

        case "update_todo":
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
        case "change_tf_state":
            let oldTodos = [];
            oldTodos = state.list;
            const newList = oldTodos.map((t) => {
                if (t.id === actions.payload.id) {
                    t.isDone = !t.isDone;
                }
                return t
            });
            return {
                ...state,
                list:newList,
                filteredlist:newList,
            }

        case "check_for_all":
            let gettodos = state.list;
            var newtodos = "";
            if(actions.payload.tick){
                newtodos = gettodos.map((t) => {
                    t.isDone = true;
                    return t
                });
            }
            else{
                newtodos = gettodos.map((t) => {
                    t.isDone = false;
                    return t
                });
            }
            return{
                ...state,
                list:newtodos,
                filteredlist:newtodos
            }

        case "filter_for":
            let newfList = [];
            switch(actions.payload.ftype){
                case "all":
                    newfList = state.list.filter((t) => {
                        return t.id
                    }); 

                    break;
                case "active":
                    newfList = state.list.filter((t) => {
                        if(t.isDone==false){
                            return t.id 
                        }
                    });
                    break;
                case "completed":
                    newfList = state.list.filter((t) => {
                        if(t.isDone==true){
                            return t.id 
                        }
                    });
                    break;
                default:
                    newfList = state.list.filter((t) => {
                        return t.id
                    });
            }
            return{
                ...state,
                filteredlist:newfList,
                filterpos:actions.payload.ftype
            }
        
        case "clear_completed":
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