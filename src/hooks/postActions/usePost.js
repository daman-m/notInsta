import { useDocumentData } from "react-firebase-hooks/firestore"
import { projectFireStore } from "../../firebase/config"
import { doc } from "firebase/firestore"

const usePost = (id) => {
    const q = doc(projectFireStore, "images", id)
    const [post, isLoading] = useDocumentData(q)

    return {post, isLoading}
}

export default usePost;