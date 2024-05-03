import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import MyComponent from './components/MyComponents';

function App() {
  return (
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
}

export default App;