import { collection, where, query, orderBy } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { projectFireStore } from "../../firebase/config";


const useComments = (postID) => {
    const q = query(collection(projectFireStore, "comments"),
    where("postID", "==", postID),
    orderBy('date', "asc")
    );
    const [comments, isLoading, error] = useCollectionData(q);

    if(error) throw error;

    return {comments, isLoading};
}

export default useComments;