import React from "react";  
import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { LOGIN, REGISTER } from "../Routes/routes";
import {   Link as RouterLink } from "react-router-dom";


const Title = () => {
    return (
        <Flex
        width="full"
        borderTop="8px solid"
        borderTopColor="blue.200"
        borderBottom="1px solid"
        borderBottomColor="blue.100"
        height="16"
        zIndex="3"
        justify="center"
        bg="blackAlpha.800"
        >

            <Flex px={4} w="full" align="center" maxW="1200px" justify="space-between">
                <Heading  as="h1" color="blue.200" fontWeight="bold" fontSize="2rem" > 
                NotInsta</Heading>

                <Box>

                    <Button
                    ml="auto"
                    colorScheme="blue"
                    size="sm"
                    marginRight="5"
                    as={RouterLink}
                    to={LOGIN}
                    >
                    Login
                    </Button>
                    <Button
                    ml="auto"
                    colorScheme="blue"
                    size="sm"
                    as={RouterLink}
                    to={REGISTER}
                    >
                    Register
                    </Button>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Title;