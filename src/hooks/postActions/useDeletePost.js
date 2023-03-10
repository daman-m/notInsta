import { useState } from "react"
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { projectFireStore } from "../../firebase/config";
import { useToast } from "@chakra-ui/react";

const useDeletePost = (id) => {

    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()

    async function deletePost() {
        const res = window.confirm("Are you sure you want to delete this post?");
        
        if (res) {
            setIsLoading(true)

            // Delete post doc
            await deleteDoc(doc(projectFireStore, "images", id));

            // delete comments on post
            const q = query(collection(projectFireStore, "comments"), where("postID", "==", id));

            const qSnap = await getDocs(q)
            qSnap.forEach( async (doc) => deleteDoc(doc.ref))

            toast({
                title:"Post deleted!",
                status: "info",
                isClosable: true,
                position: "top",
                duration: 5000
            })

            setIsLoading(false)
        }
    }

    return{deletePost, isLoading, setIsLoading}
}

export default useDeletePost;