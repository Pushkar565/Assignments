// Products.js
import React, { useContext } from 'react';
import { AppContext } from '../context';

const Products = () => {
  const { products, loading, error } = useContext(AppContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
