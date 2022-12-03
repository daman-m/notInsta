import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

// we are trying to get snapshots of the data inside our firestore database that we can then use to display images to the page. 
// first we create a hook - a func that takes the images collection as a argument 

 const useFireStore = (collect) => {
    const [docs, setDocs] = useState([])


    
    useEffect(() => {
        const colref = collection(projectFireStore, 'images')

       const unsub = onSnapshot(colref, (snapshot) => {
            let images = [];
            snapshot.docs.forEach((doc) => {
            images.push({...doc.data(), id: doc.id})
            })

            setDocs(images);
            console.log(docs)

        })

        return () => unsub();
    }, [collect])
    

    return   { docs }
}

export default useFireStore