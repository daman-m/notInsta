import { doc, query } from "firebase/firestore"  
import { projectFireStore } from "../firebase/config"
import {useDocumentData} from "react-firebase-hooks/firestore"


const useUser = (id) => {
    const q = query(doc(projectFireStore, "users", id));
    const [user, isLoading] = useDocumentData(q)
    return {user, isLoading} 
}

export default useUser;