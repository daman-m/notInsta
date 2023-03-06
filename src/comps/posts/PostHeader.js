import {  Box, Button, Flex, Text } from "@chakra-ui/react"
import Avatar from "../profile/Avatar";
import useUser from "../../hooks/useUser";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const PostHeader = ({uid, date}) => {

    const {user,isLoading} = useUser(uid)

    if (isLoading) return "Loading"
    return (
        <Flex
        alignItems="center"
        borderBottom="2px solid"
        borderColor="blue.200"
        p="3"
        bg="gray.50"
        >
        <Avatar user={user} size="sm" />

        <Box ml="4">
            <Button padding="0" margin="0"            border="1px solid red"
            colorScheme="blue"
            variant="Link"

            > @{user.username}</Button>
            <Text fontSize="sm" color="gray.500">
                {formatDistanceToNow(date)}ago
            </Text>
        </Box>
        </Flex>
    )
}

export default PostHeader;