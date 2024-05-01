// src/components/FootballMatchList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../store/actions';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const FootballMatchList = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, matches } = useSelector((state) => state.footballMatches);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchMatches(currentPage));
  }, [dispatch, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Box>
      <Heading mb={4}>Football Matches</Heading>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error fetching matches</Text>
      ) : (
        <>
          {matches.map((match) => (
            <Box key={match.id} mb={4} border="1px solid" p={4} borderRadius="md">
              <Text fontWeight="bold">{match.team1} vs {match.team2}</Text>
              <Text>Match Date: {match.date}</Text>
              <Text>Venue: {match.venue}</Text>
            </Box>
          ))}
          <Button onClick={handlePrevPage} isDisabled={currentPage === 1} mr={2}>
            Previous
          </Button>
          <Button onClick={handleNextPage}>Next</Button>
        </>
      )}
    </Box>
  );
};

export default FootballMatchList;
