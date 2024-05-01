// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Text, Button } from '@chakra-ui/react';
import { deleteTodo, updateTodo } from '../store/store';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <Box>
      {todos.map(todo => (
        <Box key={todo.id} mb={2}>
          <Text textDecoration={todo.status ? 'line-through' : 'none'}>
            {todo.title}
          </Text>
          <Button onClick={() => dispatch(updateTodo(todo.id))}>
            {todo.status ? 'Undo' : 'Done'}
          </Button>
          <Button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
        </Box>
      ))}
    </Box>
  );
};

export default TodoList;