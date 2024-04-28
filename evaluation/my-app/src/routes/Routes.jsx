import React from 'react';
import {  Route, Routes} from 'react-router-dom';
import ProductList from '../components/ProductListPage';
import ProductDetails from '../components/ProductDetailsPage';

const Routes = () => {
  return (
     <Routes>      <Route exact path="/">
        <ProductList />
      </Route>
      <Route path="/products/:id">
        <ProductDetails />
      </Route>

      </Routes>

    
  );
};

export default Routes;
