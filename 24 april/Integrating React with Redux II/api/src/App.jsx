// src/App.jsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store/store';
import FootballMatchList from './store/FootballMatchList';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className="App">
          <FootballMatchList />
        </div>
      </ChakraProvider>
    </Provider>
  );
};

export default App;