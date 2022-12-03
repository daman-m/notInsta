import { useState, useEffect } from "react";
import { projectStorage, projectFireStore } from "../firebase/config";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// this func is responsible for handling file uploads and returning useful values regarding the upload (i.e. the upload prgress and any errors and the IMAGE URL after it is uploaded)
 //this func will take a parameter - which is the file we are trying to upload and it will come from our state in the Upload component
const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    useEffect( () => {
     
        // reference to where the file will be saved
        const storageRef = ref(projectStorage , file.name);
        
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
             addDoc(collection(projectFireStore, "images"), {
                url: url,
                createdAt: serverTimestamp()
            })
        }
    }, [url]) 
    return { progress, url, error }
}
export default useStorage;