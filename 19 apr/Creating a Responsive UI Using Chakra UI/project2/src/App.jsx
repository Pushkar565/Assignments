import React from 'react';
import { Box, Flex, Text, Button, Image, Heading, Card, Center } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

function ResponsiveLayout() {
  return (
    <ChakraProvider>
      <Box bg="#edf2f6" minH="100vh" py={8}>
        <Center>
          <Heading size="lg" display="inline-block">Our Clients Speak</Heading>
        </Center>
        <Text textAlign="center" my={4}>We have been working with clients around the world</Text>
        <Flex justifyContent="space-around" flexWrap="wrap"> {/* Display cards horizontally */}
          <Card flex="1" maxW="300px" m={2}>
            <Box p="5" shadow="md" borderWidth="1px">
              <Text fontSize="xl">Efficient Collaboration</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Button mt="3">Read More</Button>
            </Box>
            <Center>
              <Image
                borderRadius='full'
                boxSize='50px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Center>
            <Text textAlign={"center"} fontWeight={500}>Joe Cooper</Text>
              <Text textAlign={"center"} color={'gray'}>CEO & ABC CORPRATION</Text>
          </Card>
          <Card flex="1" maxW="300px" m={2}>
            <Box p="5" shadow="md" borderWidth="1px">
              <Text fontSize="xl">Intuitive Design</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Button mt="3">Read More</Button>
            </Box>
            <Center>
              <Image
                borderRadius='full'
                boxSize='50px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              
              />
             
            </Center>
            <Text textAlign={"center"} fontWeight={500}>Joe Cooper</Text>
              <Text textAlign={"center"} color={'gray'}>CEO & ABC CORPRATION</Text>
          </Card>
          <Card flex="1" maxW="300px" m={2}>
            <Box p="5" shadow="md" borderWidth="1px">
              <Text fontSize="xl">Mindblowing Service</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Button mt="3">Read More</Button>
            </Box>
            <Center>
              <Image
                borderRadius='full'
                boxSize='50px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Center>
            <Text textAlign={"center"} fontWeight={500}>Joe Cooper</Text>
              <Text textAlign={"center"} color={'gray'}>CEO & ABC CORPRATION</Text>
          </Card>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default ResponsiveLayout;
