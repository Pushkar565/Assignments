import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Text, Grid } from '@chakra-ui/react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Product List
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Box
              p={4}
              borderWidth={1}
              borderRadius="md"
              boxShadow="md"
              _hover={{ boxShadow: 'lg' }}
            >
              <Text fontWeight="bold">{product.name}</Text>
              <Text>Price: ${product.price}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
