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
import { useRegister } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "../../utility/formValidate";

import { USERDASH } from "../../Routes/routes";
import { LOGIN, REGISTER } from "../../Routes/routes";
import { usernameValidate } from "../../utility/formValidate";

const SignIn = () => {


  //destructuring object for cleaner code
    const {register: signUp, isLoading} = useRegister();
    const {register,
        handleSubmit,
        reset,
        formState: { errors },
        } = useForm();

    // Function to handle the user sign in when button is clicked
    async function handleRegister(data) {
        
        // tries the login with given input data
        const successful = await signUp({
            username: data.username,
            email: data.email,
            password: data.password,
            redirectTo: USERDASH
        })
        
        // resets the form if successful    
        if (successful) reset();
    }


  
    return (
        <Center w="100%" h="100vh" >
            <Box  mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
                <Heading mb="4" size="lg"  textAlign="center">
                    Register
                </Heading>
                <form onSubmit={handleSubmit(handleRegister)}>

                <FormControl isInvalid={errors.username} py="2">
                    <FormLabel>Username</FormLabel>
                    <Input placeholder="username" {...register("username", usernameValidate)}/>
                    
                    {/*FormErrorMessage component to show error if present*/}
                    <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                 </FormControl>

                <FormControl isInvalid={errors.email} py="2">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="user@email.com" {...register("email", emailValidate)}/>
                    
                    {/*FormErrorMessage component to show error if present*/}
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                 </FormControl>

                 <FormControl isInvalid={errors.password} py="2">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="password123" {...register("password", passwordValidate)}/>
                    <FormErrorMessage>{errors.password &&errors.password.message}</FormErrorMessage>
                 </FormControl>

                 <Button 
                 mt="4" 
                 type="submit" 
                 colorScheme="teal" 
                 size="md" 
                 w="full"
                 isLoading={isLoading} 
                 loadingText="Logging In">Register</Button>
                </form>

                <Text fontSize="xlg" align="center" mt="6">
                Already have an account? {" "}    
                    <Link
                    as={RouterLink} 
                    to={LOGIN} 
                    color="#8AAAE5"
                    fontWeight="medium"
                    textDecor="underline"
                    _hover={{background: "whitesmoke"}}
                    >Log In </Link>
                    {" "} instead!
                </Text>
            </Box>
        </Center>
    )
} 

export default SignIn;