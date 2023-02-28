import { Button, Flex, Link } from "@chakra-ui/react"
import { USERDASH } from "../../Routes/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogout } from "../../hooks/auth";

const Navbar = () => {
    const {logout, isLoading} = useLogout();
     
    return (
        <Flex
        // shadow="sm"
        pos="fixed"
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

            <Flex px={4} w="full" align="center" maxW="1200px">
                <Link color="blue.200" as={RouterLink} to={USERDASH} fontWeight="bold" fontSize="2rem" > 
                NotInsta</Link>

                <Button
                ml="auto"
                colorScheme="blue"
                size="sm"
                onClick={logout}
                isLoading={isLoading}
                >
                    Logout
                </Button>
            </Flex>
        </Flex>
    )
}

export default Navbar;