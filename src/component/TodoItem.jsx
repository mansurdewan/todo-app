import React, { useState } from 'react'
import "./style.css"



function TodoItem({todos}) {

    console.log(todos)
    const [status, useStatus] = useState(false)

    const completed = ()=>{
      console.log("complited")
      if(status){
        useStatus(false)
      }
      else{useStatus(true)}
       
    }
    console.log(status,"status")
    typeof(status)
  return (
    <div className='singleTodoParent'>
     <div  className='singleTodo'>
      <li  className={status && "todoItem" }> {todos.todo} </li>
    
       </div>
       <input type="checkbox" checked={status} onClick={completed} className='checkbox'/>
       </div>
  )
}
// style={{display:"flex", alignItems:"center", justifyContent:"center"}

export default TodoItem
