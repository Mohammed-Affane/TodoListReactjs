import React from 'react'
import Todoitem from './Todoitem'
import Style from './TodoList.module.css'
export default function TodoList({Todos,setTodos}) {
  if(Todos.length>0){
    const sortedTodos=Todos.slice().sort((a,b)=>Number(a.done)-Number(b.done));
    return (
      <div className={Style.list}>
        {sortedTodos.map((item,i)=>(
        <Todoitem Todos={Todos} setTodos={setTodos} key={i}  todo={item}/>
        ))}
        
        
      </div>
    )

  }
  
}
