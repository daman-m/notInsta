import { useState, useEffect } from "react";
import { projectStorage, projectFireStore } from "../firebase/config";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import useAuth from "./auth";


// this func is responsible for handling file uploads and returning useful values regarding the upload (i.e. the upload prgress and any errors and the IMAGE URL after it is uploaded)
 //this func will take a parameter - which is the file we are trying to upload and it will come from our state in the Upload component

 //use projectStorage to upload the user file 
export const useStorage = (file) => {

    const {user} = useAuth()

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    // the code we need to get  the progress, error, and url needs to run everytime we get a new file value - which is the state we set in the Upload comp - therefore we use a useEffect with the file as dependancy 
    useEffect( () => {
     
        // reference to where the file will be saved
        // we are creating a reference to the file inside the default firebase storage
        const storageRef = ref(projectStorage , file.name);
        
        // the uploadBytes will upload to the reference location defined above - takes two params - the ref location and the data
        const uploadTask = uploadBytesResumable(storageRef, file);

        
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                let precentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(precentage);
            },
            (err) => {
                setError(err);
            },
            ()=> {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then( (url) => setUrl(url) 
                    );   
            }
        );
}, [file])


   useEffect( ()=> {
       if(url) {
               const id = uuidv4();
                setDoc(doc(projectFireStore, "images", id), {
                   url: url,
                   createdAt: serverTimestamp(),
                   likes: [],
                   id,
                   uid: user.id 
               }) 
            //    console.log(postref);
           }
       }, [url, user.id]) 
       return {progress, url, error }
}



export default useStorage;
