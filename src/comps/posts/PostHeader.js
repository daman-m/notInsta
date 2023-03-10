import {  Box, Flex, Text } from "@chakra-ui/react"
import Avatar from "../profile/Avatar";
import { useUser } from "../../hooks/user";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import UsernameButton from "../profile/UsernameButton";

const PostHeader = ({uid, date}) => {

    const {user,isLoading} = useUser(uid)

    if (isLoading) return "Loading"
    return (
        <Flex
        alignItems="center"
        borderBottom="2px solid"
        borderColor="blue.200"
        paddingTop="0"
        paddingBottom="1"
        px="3"
        bg="gray.50"
        >
        <Avatar user={user} size="sm" />

        <Box ml="4">
            <UsernameButton user={user} />

            <Text fontSize="sm" color="gray.500">
                {formatDistanceToNow(date)} ago
            </Text>
        </Box>
        </Flex>
    )
}

export default PostHeader;