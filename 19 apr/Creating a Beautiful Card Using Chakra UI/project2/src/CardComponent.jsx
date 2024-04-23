import React from 'react';
import { Box, Text, Image, Card, CardBody, Heading, Button, Center } from '@chakra-ui/react';

function CardComponent() {
  return (
    <Center h="100vh"> {/* Aligns content vertically in the middle of the screen */}
      <Card maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
        <CardBody textAlign="center">
          <Center mb={4}> {/* Center the image */}
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Center>

          <Heading as="h3" size="lg" mb={2}>James Potter</Heading>

          <Text fontSize="2xl" fontWeight="700" color="gray">@Potter_Jms</Text>

          <Text fontSize="2xl" fontWeight="500" textAlign="center" mt={4}>
            Actor, musician, songwriter, <br />and artist. PM for work inquiries <br /> or <br /> <Text as="span" color="blue">#tag</Text> <br />me in your posts
          </Text>

          <Text textAlign="center" mt={4}>
            <span>#ART</span> <span>#PHOTOGRAPHY</span> <span>#MUSIC</span>
          </Text>

          <Button colorScheme="gray" mt={6} mx={2}>Message</Button>
          <Button colorScheme="messenger" mt={6} mx={2}>Follow</Button>
        </CardBody>
      </Card>
    </Center>
  );
}

export default CardComponent;
