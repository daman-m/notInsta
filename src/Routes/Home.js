import Title from "../comps/Title";
import ImageList from "../comps/posts/ImageList"
import { Box, Heading , Link } from "@chakra-ui/react";
import { Link as routerLink } from "react-router-dom";
import { REGISTER } from "./routes";

const Home = () => {
    
    return (
        <Box>
            <Title />
            <Box
            px="2%">
                <Heading as="h2" size="md" align="center"
                mt="3" color="blackAlpha.800">
            
                 Share and interact with posts
                </Heading>
                <Heading size="sm" align="center" color="blackAlpha.800">
                <Link
                as={routerLink}
                to={REGISTER}
                color="blue.200"
                >Sign up</Link> and spread the love :) </Heading>
                
            <ImageList /> 
            </Box>
        </Box>
    )
}

export default Home;