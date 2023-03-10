import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";

// we are trying to get snapshots of the data inside our firestore database that we can then use to display images to the page. 
// first we create a hook - a func that takes the images collection as a argument 

const useFireStore = (collect, uid = null) => {
    
    const [docs, setDocs] = useState([])
    
    
    useEffect(() => {
        
        //collection Reference
        const colref = collection(projectFireStore, 'images')

        //query - to order array in desc order
        //I had to create an index to do this for some reason 
        const q = uid ?  query(
            colref,
            orderBy('createdAt', 'desc'),
            where("uid","==",uid))
        : query(colref,orderBy('createdAt', 'desc'))
    
        
       const unsub = onSnapshot(q, (snapshot) => {
            let images = [];
            snapshot.docs.forEach((doc) => {
            images.push({...doc.data(), id: doc.id})

            })

            setDocs(images);
        })

        return () => unsub();
    }, [uid])
    

    return   { docs }
}



export default useFireStore