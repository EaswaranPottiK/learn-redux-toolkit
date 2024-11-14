import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todoList = useSelector((store)=>store.todos)
    const dispatch = useDispatch()
    function deleteItem(id){
        dispatch(removeTodo(id))
    }
  return (
    <div className='text-xl m-auto w-[30%]'>
        <ol>
            {todoList.map((item)=>(
                <div key={item.id} className="flex justify-between">
                <li key={item.id}>{item.data}</li>
                <button onClick={()=>deleteItem(item.id)}>Delete Item</button>
                </div>
            ))}
        </ol>
    </div>
  )
}

export default Todos