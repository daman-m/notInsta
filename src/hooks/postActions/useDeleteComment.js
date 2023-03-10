import { useToast } from "@chakra-ui/react";
import { deleteDoc, doc } from "firebase/firestore";
import { projectFireStore } from "../../firebase/config";
import { useState } from "react";

const useDeleteComment = (id) => {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast()

    async function deleteComment() {

        
        const res = window.confirm("Are you sure you want to delete this comment ?")
        
        if (res) {
            
            setLoading(true);
            const docRef = doc(projectFireStore, "comments", id);
            await deleteDoc(docRef);
            toast({
                title: "Comment deleted!",
                status: "info",
                isClosable: true,
                position: "top",
                duration:5000
            })
            setLoading(false);
        }

    }
    return{deleteComment, isLoading}
} 

export default useDeleteComment;