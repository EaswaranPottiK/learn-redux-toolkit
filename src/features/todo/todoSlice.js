import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[],
}

export const todoSlice = createSlice({
    name: 'todo', //give a good name as you will use it in multiple places eg redux-dev tools 
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>
            todo.id!=action.payload)
        }
    }
})

// all the methods u created, you have to export it as action 
// we will be exporting each method and also the entire reducer
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer 
// we are exporting the entire reduer because it needs to be wired up to store