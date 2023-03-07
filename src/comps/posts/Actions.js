import { Flex, IconButton } from "@chakra-ui/react"
import { FaRegHeart, FaHeart, FaComment, FaTrash } from "react-icons/fa"
import useAuth from "../../hooks/auth";
import useToggleLike from "../../hooks/postActions/useToggleLike";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../Routes/routes";
import useDeletePost from "../../hooks/postActions/useDeletePost";

const Actions = ({doc}) => {
    const {user,isLoading} =useAuth();
    const isLiked =  doc.likes.includes(user?.id)
  
    const {toggleLike, likeLoading} = useToggleLike({
        isLiked,
        uid: user?.id,
        id: doc.id
    })    
    const{ deletePost, isLoading: deleteLoading} = useDeletePost(doc.id)

    const totalLikes = doc.likes.length;
    return (
        <Flex p="2">
            <Flex alignItems="center">
                <IconButton size="md" colorScheme="red" variant="ghost"
                onClick={toggleLike}
                isLoading={likeLoading || isLoading}
                icon={isLiked ? <FaHeart/> : <FaRegHeart/>}
                isRound
                />
                {totalLikes}
            </Flex>
            <Flex alignItems="center" ml="2">
                <IconButton size="md" colorScheme="blue" variant="ghost"
                as={Link}
                to={`${PROTECTED}/comments/${doc.id}`}
                icon={ <FaComment/>}
                isRound
                />
                5
            </Flex>
                <IconButton size="md" colorScheme="red" variant="ghost"
                icon={ <FaTrash/>}
                isRound
                ml="auto"
                onClick={deletePost}
                isLoading={deleteLoading}
                />

        </Flex>
        
    )
}

export default Actions
