import React from 'react'
import Style from './Footer.module.css'

export default function Footer({CountDone,CountNotDone,TotalTodos}) {
  return (
    <>
      <footer className={Style.footer}>

        <h1 className={Style.Completed} >Task Completed : {CountDone} </h1><h1  className={Style.Total}>Total Todos : {TotalTodos}</h1> <h1 className={Style.NotCompleted}>Task Not Completed : {CountNotDone}</h1>

      </footer>
    </>
  )
}
