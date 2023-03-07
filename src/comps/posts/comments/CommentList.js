import { Box } from "@chakra-ui/react";
import useComments from "../../../hooks/postActions/useComments";
import SingleCommment from "./SingleComment";

const CommentList = ({post}) => {
    const {id} = post
    const {comments, isLoading} = useComments(id);

    if (isLoading) return "Loading...";

    return (
    <Box>
        {comments.map((comment) => 
        <SingleCommment key={comment.id} comment={comment}/>)}
    </Box>
    )
    
    

}

export default CommentList;