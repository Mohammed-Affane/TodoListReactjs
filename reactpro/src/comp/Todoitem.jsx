import React from 'react'
import Style from './Todoitem.module.css'
export default function Todoitem({todo,Todos,setTodos}) {
  


  function handleDelete(item){
    
    setTodos(Todos.filter((td)=>td!==item));
  }
  function handleClick(name){
    let newArray=Todos.map((todo)=>name===todo.name  ? {...todo,done:!todo.done}  : {...todo} )
    setTodos(newArray);
  }
  const complete=todo.done ? Style.completed : '';
  return (
    <>
      <div className={Style.item} >
        <div id="item" className={Style.itemName}  ><span className={complete} onClick={()=>handleClick(todo.name)}  >{todo.name}</span><span>
          <button onClick={()=>handleDelete(todo)} className={Style.delete}>X</button>
        </span></div>
        
        <hr className={Style.line}/>

        
        </div>
        
        
        
    </>
  )
}
