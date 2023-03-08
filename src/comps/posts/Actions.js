import { Flex, IconButton } from "@chakra-ui/react"
import { FaRegHeart, FaHeart, FaComment, FaTrash, FaRegComment } from "react-icons/fa"
import useAuth from "../../hooks/auth";
import useToggleLike from "../../hooks/postActions/useToggleLike";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../Routes/routes";
import useDeletePost from "../../hooks/postActions/useDeletePost";
import useComments from "../../hooks/postActions/useComments";
 

const Actions = ({doc}) => {
    const {user,isLoading} =useAuth();
    const isLiked =  doc.likes.includes(user?.id)
  
    const {toggleLike, likeLoading} = useToggleLike({
        isLiked,
        uid: user?.id,
        id: doc.id
    })    
    const{ deletePost, isLoading: deleteLoading} = useDeletePost(doc.id)
    const {comments, isLoading:commentsLoading} = useComments(doc.id)

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
                icon={ comments?.length === 0 ?<FaRegComment/> : <FaComment/> }
                isRound
                isLoading={commentsLoading}
                />
                {comments?.length}
            </Flex>
               {!isLoading && user?.id === doc.uid &&(<IconButton size="md" colorScheme="red" variant="ghost"
                icon={ <FaTrash/>}
                isRound
                ml="auto"
                onClick={deletePost}
                isLoading={deleteLoading}
                />)}

        </Flex>
        
    )
}

export default Actions
