import { createSlice } from "@reduxjs/toolkit";


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
        ],
        filteredItems: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
        filteredTodo: (state, action) => {
            const searchTerm = action.payload;
            if (searchTerm) {
                state.filteredItems = state.items.filter(item =>
                    item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
            } else {
                state.filteredItems = state.items;
            }
        }
    }
})

export default todosSlice.reducer
export const { addTodo, filteredTodo } = todosSlice.actions