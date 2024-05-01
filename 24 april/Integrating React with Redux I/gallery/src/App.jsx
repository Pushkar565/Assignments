// src/App.jsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoForm from './components/TodoForm';
import TodoList from './components/Todo.List';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className="App">
          <h1>Todo App</h1>
          <TodoForm />
          <TodoList />
        </div>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
