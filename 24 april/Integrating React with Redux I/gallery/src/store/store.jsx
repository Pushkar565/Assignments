// src/store/store.js
import { createStore } from 'redux';

const initialState = {
  todos: [],
};

const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    title,
    status: false,
    id: Math.random().toString(36).substr(2, 9),
  },
});

export const updateTodo = (id) => ({
  type: UPDATE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, status: !todo.status } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;