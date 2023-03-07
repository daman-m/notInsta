import { useDocumentData } from "react-firebase-hooks/firestore"
import { projectFireStore } from "../firebase/config"
import { doc } from "firebase/firestore"

const SinglePost = () => {
    const q = doc(projectFireStore, "images", id)
    const [post, isLoading] = useDocumentData(q)
    return (
        "hi"
    )
}