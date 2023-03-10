import { Button, Flex, HStack, Link } from "@chakra-ui/react"
import { USERDASH } from "../../Routes/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogout } from "../../hooks/auth";
import { USERS } from "../../Routes/routes";

const Navbar = () => {
    const {logout, isLoading} = useLogout();
     
    return (
        <Flex
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


                <HStack ml="auto">

                    <Button
                    variant="solid"
                    colorScheme="blue"
                    as={RouterLink}
                    to={USERS}
                    mr="3"
                    size="sm"
                    display={{base:"flex", md:"none"}}
                    > All Users 
                    </Button>

                    <Button
                    colorScheme="blue"
                    size="sm"
                    onClick={logout}
                    isLoading={isLoading}
                    >
                        Logout
                    </Button>
                </HStack>
            </Flex>
        </Flex>
    )
}

export default Navbar;