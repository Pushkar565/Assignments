// App.js
import React from 'react';
import {Routes , Route,  } from 'react-router-dom';
import Home from './compon Routerents/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Routes>
     
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={ProductDetails} />
     
    </Routes>
  );
}

export default App;
