import { Heading, Button, Input, Image, Stack, Text, Divider, ButtonGroup, Center } from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Heading size="lg" color="blue.500" fontWeight="bold" textAlign='center' mt={10}>Welcome to My App</Heading>

      {/* Center the button */}
      <Center mt={6}>
        <Button colorScheme="yellow" size="md">Click Me</Button>
      </Center>

      <Input placeholder="Enter text" variant="filled" textAlign='center' mt={6}  />

      <Card maxW='sm' mt={6} mx='auto'>
        <CardBody textAlign='center'>
          <Heading size='lg' color='blue.500' fontWeight='bold'>Card</Heading>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

    </ChakraProvider>
  );
}

export default App;
