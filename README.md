
REDUX - TOOLKIT 

https://www.youtube.com/watch?v=pX0SBJF01EU	
 
Redux is a state management tool for js applications


Three Principles of React 

1) Single source of truth: The global state of your application is stored in an object tree within a single store.

2) State is read-only: All changes are centralized and happen one by one in a strict order, there are no subtle race conditions to 
watch out for.

3) Changes are made with pure functions: Reducers are just pure functions that take the previous state and an action, 
and return the next state.



Store: It keeps all information in a centralised place 
reducers: they are almost like controllers, their job is to update the data like add/remove
useSelector: This hook can directly talk to the store to get some value 
useDispatch: When you want to update some data, you cannot directly call the reducers (this will break the flow). In this case you will
			 use useDispatch and tell you want to use a very specific reducer and then reducer finallay gets an update in store 
			 Some people directly call this as Dispatch 
slice: It tracks initial state of store and also all reducers are collected here.
	   import {createSlice} from '@reduxjs/toolkit'
nanoid: A unique id provided by redux toolkit 
	    import {nanoid} from '@reduxjs/toolkit'	

npm install @reduxjs/toolkit
npm install react-redux

Folder structure (standard one followed in the industry)
React-App
	src
		App (you can also name this folder as Store)
			store.js
		Features
			todo (name is based on my functionality so you can change this to anything you like)
				todoSlice.js
		

Step 1) Create a store 
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    // your store should be aware of all the reducers
    reducer:todoReducer,
})

Step 2) Put a wrapper around <App/> so that all components are aware of store 
    <Provider store={store}>
       <App />
    </Provider>

Step 3) Create slice: first declare initial state, use createSlice method - name for slice, initial state, reducers. Now export the
reducer as a whole and as individual components 
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:'todo', //give a good name as you will use it in multiple places eg redux-dev tools 
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id: nanoid(),
                data: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})

// all the methods u created, you have to export it as action 
// we will be exporting each method and also the entire reducer
// we are exporting the entire reducer because it needs to be wired up to store
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer
