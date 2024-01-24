import React from 'react'
import { useSelector } from 'react-redux'


const TodoList = () => {

    const items = useSelector(state => state.todos.items)
    const filteredItems = useSelector(state => state.todos.filteredItems)
    console.log(items);

  return (
    <div className='todolist'>
        {
            filteredItems.map(item => (
                <div key={item.id} className='todolistItem' style={{ backgroundColor: item.color }}>
                    <span>{item.title}</span>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList