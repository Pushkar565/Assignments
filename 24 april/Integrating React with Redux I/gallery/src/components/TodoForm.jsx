// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Input, Button } from '@chakra-ui/react';
import { addTodo } from '../store/store';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim() !== '') {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <Box>
      <Input
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
    </Box>
  );
};

export default TodoForm;
