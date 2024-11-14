import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
  const [input,setInput] = useState('')
  const dispatch = useDispatch()
  function handleSubmit(){
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <div className='text-xl m-auto w-[30%]'>
      <p className='mt-10'>Please enter a task</p>
      <input type='text' className='border-2 border-black' value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <button onClick={handleSubmit}>&nbsp;Submit button</button>
    </div>
  )
}

export default AddTodo