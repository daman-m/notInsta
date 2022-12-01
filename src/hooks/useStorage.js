import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    useEffect( () => {
        //REFERENCES
        console.log( )

        const storageRef = ref(projectStorage,file.name);
        console.log(storageRef);

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
}, [File]);

    return { progress, url, error }



}

export default useStorage;