import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


function App() {

  const myList = useSelector(state => state.todoList)
  
// useEffect(() => {
// }, [myList])

// const [todo , settodo]=([myList])   //in case of operations

 
  return (
    <div className="text-center py-2">
      <TodoForm />
      <TodoList todos={myList}  />   {/* deleteTodo={deleteTodo} */}
    </div>
  );
}

export default App;
