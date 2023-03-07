import {  Box, Button, Flex, Input } from "@chakra-ui/react"
import useAuth from "../../../hooks/auth";
import useAddComment from "../../../hooks/postActions/useAddComment";
import Avatar from "../../profile/Avatar";
import { useForm } from "react-hook-form";


const NewComments = ({post}) => {
    const{id: postID} = post
    const {user, isLoading} = useAuth();

    const {register, handleSubmit, reset } = useForm();
    const {addComment, isLoading: commentLoading} = useAddComment({postID, uid:user?.id});

    const handleAddComment = (data) => {
        addComment( data.text )
        reset();
    }

    if (isLoading) return "Loading..."
    return (
        <Box maxW="600px" mx="auto" py="6">
            <Flex padding="4">
                <Avatar user={user} size="sm"/>
                <Box flex="1" ml="4">
                    <form onSubmit={handleSubmit(handleAddComment)}>
                        <Box>
                            <Input
                            size="sm"
                            variant="flushed"
                            placeholder="Write comment..."
                            autoComplete="off"
                            {...register('text', {required: true})}
                            />
                        </Box>
                        <Flex pt="2">
                            <Button
                            isLoading={commentLoading || isLoading}
                            type="submit"
                            colorScheme="blue"
                            size="xs"
                            ml="auto">
                                Add Comment
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Flex>
        </Box>
    )
}

export default NewComments