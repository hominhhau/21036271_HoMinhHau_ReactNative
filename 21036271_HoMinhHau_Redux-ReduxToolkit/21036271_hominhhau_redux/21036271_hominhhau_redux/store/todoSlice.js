// store/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    setTodos: (state, action) => action.payload,
    addTodo: (state, action) => {
      const newTodo = {
        id: state.length ? state[state.length - 1].id + 1 : 1, // Generate a new ID
        title: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    editTodo: (state, action) => {
      const { id, newTitle } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = newTitle;
      }
    },
    deleteTodo: (state, action) => state.filter((todo) => todo.id !== action.payload),
  },
});

export const { setTodos, addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
