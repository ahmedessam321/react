export const ADD_TODO="ADDTODO"
export const addTodo = (title,content) => {
    return{
        type:ADD_TODO,
        payload : {
        title : title,
        content : content
        }
    }
}