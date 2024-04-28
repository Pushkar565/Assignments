import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;