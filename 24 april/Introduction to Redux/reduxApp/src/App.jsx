import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from "./action";
import { Button} from '@chakra-ui/react'

const App = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <><h1 >{theme}</h1>
    <div className={`App ${theme}`}>
      <header className='App-header'>
        <Button colorScheme='blue'  onClick={() => dispatch(toggleTheme())}>Toggle Theme</Button>
        <p>Current Theme: {JSON.stringify(theme)}</p>
      </header>
       
    
    
    </div>
    </>
  );
};

export default App;