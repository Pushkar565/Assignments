// src/components/CoffeeList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { fetchCoffee } from '../store/actions/coffeeActions';

const CoffeeList = () => {
  const dispatch = useDispatch();
  const coffeeList = useSelector((state) => state.coffee.coffeeList);

  useEffect(() => {
    dispatch(fetchCoffee());
  }, [dispatch]);

  return (
    <Box p={4}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {coffeeList.map((coffee) => (
          <GridItem key={coffee.id} bg="gray.200" p={4} borderRadius="md">
            <p>{coffee.name}</p>
            <p>{coffee.description}</p>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default CoffeeList;
