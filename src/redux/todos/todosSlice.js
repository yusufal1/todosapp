import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [
            {
                id: 1,
                title: 'Learn a React',
                color: 'blue'
            },
            {
                id: 2,
                title: 'Read a Book',
                color: 'pink'
            },
            {
                
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export default todosSlice.reducer
export const { addTodo } = todosSlice.actions