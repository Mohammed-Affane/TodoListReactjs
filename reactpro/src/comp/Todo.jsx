import React, { useState } from 'react'
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';
export default function Todo() {
  const [Todos,setTodos]=useState([]);
  let CountDone=0;
  let CountNotDone=0;
  let TotalTodos=Todos.length;
  Todos.filter((todo)=>todo.done?CountDone+=1:CountNotDone+=1)
  return (
    <>
    <Form Todos={Todos} setTodos={setTodos}/>
    <TodoList Todos={Todos} setTodos={setTodos}  />
    <Footer CountDone={CountDone} CountNotDone={CountNotDone} TotalTodos={TotalTodos}/>
    

    </>
  )
}
