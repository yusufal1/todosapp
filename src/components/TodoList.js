import React from 'react'
import { useSelector } from 'react-redux'


const TodoList = () => {

    const items = useSelector(state => state.todos.items)
    console.log(items);

  return (
    <div className='todolist'>
        {/* <div className='todolistItem'>
            <span>Item 1</span>
        </div>
        <div className='todolistItem'>
            <span>Item 1</span>
        </div>
        <div className='todolistItem'>
            <span>Item 1</span>
        </div>
        <div className='todolistItem'>
            <span>Item 1</span>
        </div> */}
        {
            items.map(item => (
                <div key={item.id} className='todolistItem' style={{ backgroundColor: item.color }}>
                    <span>{item.title}</span>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList