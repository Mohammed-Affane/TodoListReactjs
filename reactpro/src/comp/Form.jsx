import React from 'react'
import { useState } from 'react';
import Style from './Form.module.css';

export default function Form({Todos,setTodos}) {
  // const [Todo,setTodo]=useState('');
  const [Todo,setTodo]=useState({name:"",done:false});

  function handleSubmit(e){
    e.preventDefault();
    setTodos([...Todos,Todo]);
    setTodo({name:"",done:false});
  }
  return (
    <>
    <form  onSubmit={handleSubmit} className={Style.todoform} >
      <input className={Style.modernIn} type="text" value={Todo.name} onChange={(e)=>setTodo({name:e.target.value,done:false})} placeholder='Entrez Todo item'   />
      <button className={Style.modernBtn} type='submit' >Add</button>
    </form>
      
    </>
  )
}
