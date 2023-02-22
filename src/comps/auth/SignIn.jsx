import { useState } from "react"
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { 
    Center,
    Heading,
    Box,
    FormControl,
    Input,
    FormErrorMessage,
    FormLabel,
    Button,
    Link,
    Text,

 } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            })


    }

    return (
        <Center w="100%" h="100vh" >
            <Box 
            mx="1" 
            maxW="md" 
            p="9" 
            borderWidth="1px" 
            borderRadius="lg">
                <Heading mb="4" size="lg" textAlign="center">Log In</Heading>
                <form onSubmit={signIn}>
                <FormControl isInvalid={true} py="2">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="user@email.com"/>
                    <FormErrorMessage>This is an error ME</FormErrorMessage>
                 </FormControl>
                 <FormControl isInvalid={true} py="2">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="password123"/>
                    <FormErrorMessage>This is an error ME</FormErrorMessage>
                 </FormControl>
                 <Button 
                 mt="4" 
                 type="submit" 
                 colorScheme="#8AAAE5" 
                 size="md" 
                 w="full"
                 isLoading={true} 
                 loadingText="Logging In">Log In</Button>
                </form>

                <Text
                fontSize="xlg"
                align="center"
                mt="6">
                Don't have an account? {" "}    

                <Link
                as={RouterLink} 
                to="/NewUser" 
                color="#8AAAE5"
                fontWeight="medium"
                textDecor="underline"
                _hover={{background: "whitesmoke"}}
                >Register</Link>

                {" "} instead!
                </Text>
            </Box>
        </Center>
    )
} 

export default SignIn;