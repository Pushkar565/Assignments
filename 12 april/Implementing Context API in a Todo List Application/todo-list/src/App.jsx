import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
