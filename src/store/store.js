import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'


export const store = configureStore({
    // your store should be aware of all the reducers
    reducer:todoReducer,
})