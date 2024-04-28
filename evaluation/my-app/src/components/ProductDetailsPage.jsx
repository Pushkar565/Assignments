import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Text, Button } from '@chakra-ui/react';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        {product.name}
      </Text>
      <Text mb={4}>{product.description}</Text>
      <Text mb={4}>Price: ${product.price}</Text>
      <Button colorScheme="blue">Add to Cart</Button>
    </Box>
  );
};

export default ProductDetails;
