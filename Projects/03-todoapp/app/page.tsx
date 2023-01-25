import React from "react";
import AddTodo from './add-todo';
import ToDoList from './todo-list';

function Home() {
  return (
   <div>
       
       {/* @ts-ignore */}
    <AddTodo />
    <ToDoList />
   </div>
  );
}

export default Home
