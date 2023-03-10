import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useUser } from "../../../hooks/user";
import Avatar from "../../profile/Avatar";
import formatDistanceToNow from "date-fns/esm/formatDistanceToNow/index.js";
import UsernameButton from "../../profile/UsernameButton";
import { FaTrash } from "react-icons/fa";
import useDeleteComment from "../../../hooks/postActions/useDeleteComment";
import useAuth from "../../../hooks/auth";

const SingleCommment = ({comment}) => {
    const {text, uid, date, id} = comment;
    const {user, isLoading} = useUser(uid);
    const {user:authUser, isLoading:authLoading} = useAuth();
    const {deleteComment, isLoading: deleteLoading} = useDeleteComment(id)

     

    if (isLoading ) return "Loading..."

    return (
        <Box px="2" maxW="600px" mx="auto" textAlign="left">
            <Flex pb="2">
                <Avatar user={user} size="sm" />
                <Box flex="1" ml="4">
                    <Flex borderBottom="1px solid" borderColor="blue.200" pb="2">
                        <Box>
                            <UsernameButton user={user} />
                            <Text fontSize="xs" color="gray.500">
                                {formatDistanceToNow(date)} ago
                            </Text>
                        </Box>
                        {!authLoading && authUser?.id === uid && (
                            <IconButton size="sm" ml="auto" icon={<FaTrash/>} 
                            isRound 
                            colorScheme="red"
                            variant="ghost"
                            onClick={deleteComment}
                            isLoading={deleteLoading} />
                            )
                        }
                    </Flex>
                    <Box pt="2" fontSize="sm">
                        <Text>{text}</Text>
                    </Box>
                </Box>
            </Flex>

        </Box>
    )
}

export default SingleCommment;