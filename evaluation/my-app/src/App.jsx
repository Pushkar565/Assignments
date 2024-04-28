import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
           <Routes>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/products/:id">
              <ProductDetailsPage />
            </PrivateRoute>
            <PrivateRoute path="/cart">
              <CartPage />
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <CheckoutPage />
            </PrivateRoute>
            <Route path="/products">
              <ProductListPage />
            </Route>
          
            </Routes>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
