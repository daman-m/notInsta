import Title from "../comps/Title";
import { Link as routerLink } from "react-router-dom";
import { REGISTER } from "./routes";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';


const Home = () => {
    
    return (
    <>
    <Title/>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Welcome to social media <br />
            <Text as={'span'} color={'blue.200'}>
              made simple
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          Join a community of like-minded individuals and learn how to cultivate meaningful relationships through social media, without the need for flashy tactics or chasing followers
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'blue'}
              as={routerLink}
              to={REGISTER}
              bg={'blue.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'blue.500',
              }}>
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}


    


export default Home;