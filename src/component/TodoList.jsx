import React, { useState } from 'react'
import TodoItem from './TodoItem';
import "./style.css"

function TodoList() {
    const [todo, useTodo] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const getTodo = [...todo,{todo: e.target.todo.value,checked:true}] 
        useTodo(getTodo)
        e.target.todo.value = ''
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
          <div className='flex'>
      <input 
      type="text"
      name='todo'
      placeholder='TODO'
      className='input'
       />
        <input type="submit" value="add" className='submitButton' />
       </div>
      
      </form>
      <div className=  'todoItemParent'>
      <ol>{todo.map((todos)=> <TodoItem  todos = {todos} />)}</ol>
      </div>
    </div>
  )
}

export default TodoList
