import { Box } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import usePost from "../../../hooks/postActions/usePost";
import { Image } from "@chakra-ui/react";
import PostHeader from "../PostHeader";
import Actions from "../Actions";
import NewComments from "./NewComments";
import CommentList from "./CommentList";

const Comments  = () => {
    const {id} = useParams();
    const {post, isLoading} = usePost(id)
    if (isLoading) return "Loading...";

    return (
        <Box align="center" pt="50">
            <Box className="imgContainer"  
            my="5"  
            border="2px solid" 
            borderColor="gray.100"
            borderRadius="md"
            width="fit-content">
            <PostHeader uid={post.uid} date={post.date} />
            <Image
            maxH="420px"
            maxW={["310","350","420" ]}
            objectFit="cover"
            borderBottomRadius="md"
            src={post.url} 
            alt="uploaded pic"/>
            <Actions doc={post}/>
            </Box>
            <NewComments post={post}/>
            <CommentList post={post} />

        </Box>
    )
}

export default Comments