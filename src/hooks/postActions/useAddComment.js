import { useState } from "react";
import { setDoc } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { projectFireStore } from "../../firebase/config";
import { useToast } from "@chakra-ui/react";
import { doc } from "firebase/firestore";

const useAddComment = ({postID, uid }) => {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast()
    
    async function addComment(text) {
        setLoading(true);
        const id = uuidv4();
        const date = Date.now()
        const docRef = doc(projectFireStore, "comments", id)
        await setDoc(docRef, {text , id, postID, date, uid})

        toast({
            title: "Comment added!",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000
        })

        setLoading(false)
    }
    return {addComment, isLoading}
}

export default useAddComment;