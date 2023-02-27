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
import { useLogin } from "hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "utility/formValidate";
import { USERDASH } from "Routes/routes";
const SignIn = () => {


  //destructuring object for cleaner code
    const {login, isLoading} = useLogin();
    const {register,
         handleSubmit,
          reset,
           formState: { errors },
        } = useForm();

    // Function to handle the user sign in when button is clicked
    async function handleSignIn(data) {
        
        // tries the login with given input data
        const successful = await login({
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
                    Log In
                </Heading>
                <form onSubmit={handleSubmit(handleSignIn)}>

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
                //  isLoading={true} 
                 loadingText="Logging In">Log In</Button>
                </form>

                <Text fontSize="xlg" align="center" mt="6">
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