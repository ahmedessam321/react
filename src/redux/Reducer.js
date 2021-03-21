import  {ADD_TODO} from './Action'

const intialState = {
    todoList :[]
}
export function rootReducer (state = intialState , action){
    if(action.type === ADD_TODO){
        return{
            ...state,
            todoList:[
                    ...state.todoList,
                    action.payload

            ]
        }
    }
    return state
}
export default rootReducer;