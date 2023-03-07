import { arrayRemove, arrayUnion, updateDoc } from "firebase/firestore";
import { useState } from "react"
import { projectFireStore } from "../../firebase/config"
import { doc } from "firebase/firestore";

function useToggleLike({id, isLiked, uid}) {
    const[isLoading, setIsLoading] =useState(false)

    async function toggleLike() {
        setIsLoading(true) 
        const docRef = doc(projectFireStore, "images", id);
        
        await updateDoc(docRef, {
            likes: isLiked? arrayRemove(uid): arrayUnion(uid)
        });
        setIsLoading(false)
    }
    return {toggleLike, isLoading}
}

export default useToggleLike;