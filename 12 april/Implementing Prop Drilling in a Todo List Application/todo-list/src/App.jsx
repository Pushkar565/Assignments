// App.js

import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodoProvider } from './TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
