// TodoForm.js

import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim()) {
      addTodo({
        id: Date.now(),
        text: todoText.trim(),
      });
      setTodoText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
