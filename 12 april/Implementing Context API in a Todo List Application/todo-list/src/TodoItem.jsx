import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.status} />
      <span>{todo.title}</span>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoItem;
