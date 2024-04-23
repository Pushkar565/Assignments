import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import CardComponent from './CardComponent';

function App() {
  return (
    <ChakraProvider>
      <CardComponent />
    </ChakraProvider>
  );
}

export default App;
