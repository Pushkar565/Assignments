import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const priceRange = searchParams.get('priceRange');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(product => {
    let includeProduct = true;
    if (category && product.category !== category) {
      includeProduct = false;
    }
    if (priceRange && (product.price < priceRange.min || product.price > priceRange.max)) {
      includeProduct = false;
    }
    return includeProduct;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - Category: {product.category}, Price: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
