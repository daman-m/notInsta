import { Link } from "react-router-dom";
import { PROTECTED, USERS } from "../../Routes/routes";
import useAuth from "../../hooks/auth";
import Avatar from "../profile/Avatar";

const { Box, Button, Stack, Code } = require("@chakra-ui/react")

const ActiveUser = () => {
    const {user, isLoading } = useAuth();
        if (isLoading)  {
            return "Loading..."
        }

            return (
                <Stack align="center" spacing="5" my="8">
                    <Avatar user={user} />
                 <Code>@{user?.username}</Code>
                    <Button colorScheme="blue" w="full" as={Link} to={`${PROTECTED}/profile/${user?.id}`}>Edit Profile
                    </Button> 
                </Stack>
            )
          
}

const Sidebar = () => {

    return(

            <Box align="center"
            px="6"
            height="100vh"
            w="full"
            maxW="300px"
            borderLeft="1px solid"
            borderLeftColor="blue.100"
            position="sticky"
            top="16"
            display={{base:"none",md:"block"}}
            >
                <ActiveUser/>

                <Box as="ul" borderBottom="2px solid" borderColor="blue.200"></Box>
                <Button
                variant="outline"
                colorScheme="blue"
                as={Link}
                to={USERS}
                mt="4"
                size="sm"
                > ALL USERS </Button>
            
            </Box> 
    )
}

export default Sidebar;