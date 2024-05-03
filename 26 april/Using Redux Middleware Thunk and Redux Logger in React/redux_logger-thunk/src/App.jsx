// src/App.jsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
import CoffeeList from './components/CoffeeList';

const App = () => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <div className="App">
          <CoffeeList />
        </div>
      </Provider>
    </ChakraProvider>
  );
};

export default App;
