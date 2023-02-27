import { getDocs, query, where, collection } from "firebase/firestore";
import { projectFireStore } from "../firebase/config";
 async function isUsernameExists(username) {
 const q = query(collection(projectFireStore, "users"), where("username", "==", username));
 const querySnapshot = await getDocs(q);
 return querySnapshot.size > 0;
}

export default isUsernameExists;