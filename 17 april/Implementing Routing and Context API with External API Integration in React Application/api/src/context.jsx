// context.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('your-api-url/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  return (
    <AppContext.Provider value={{ products, loading, error, getProductById }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
