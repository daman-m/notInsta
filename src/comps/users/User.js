import { Button, Code, VStack, } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../Routes/routes";
import Avatar from "../profile/Avatar";

const User = ({user}) => {
    const {id, username} = user;

    return (
        <VStack
        bg="gray.100"
        shadow="sm"
        rounded="md"
        textAlign="center"
        p="4"
        spacing="3">

            <Avatar user={user}/>
            <Code>@{username}</Code>
            <Link to={`${PROTECTED}/profile/${id}`}>
                <Button
                size="sm"
                variant="link"
                colorScheme="blackAlpha">
                    View Profile
                </Button>
            </Link>
        </VStack>
    )

}

export default User;