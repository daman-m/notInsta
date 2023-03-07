import { useToast } from "@chakra-ui/react";
import { updateDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectFireStore, projectStorage } from "../firebase/config";

const useUpdateAvatar = (uid) => {

    const[isLoading, setLoading] = useState(false)
    const[file, setFile] = useState(null)
    const toast = useToast()
    const navigate = useNavigate()

    async function updateAvatar(){

        if (!file) {
            toast({
                title: "No file selected",
                description: "Please select a file to upload",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top"
            });

            return
        }
        setLoading (true)
        const fileRef = ref(projectStorage, "avatars/" + uid)
        await uploadBytes(fileRef, file)

        const avatarURL = await getDownloadURL(fileRef)
        const docRef = doc(projectFireStore, "users", uid)
        await updateDoc(docRef, {avatar: avatarURL})

        toast({
            title: "Profile updated!",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000
        });
        setLoading(false)

        navigate(0)
    }


    return { setFile, updateAvatar, isLoading, fileURL: file && URL.createObjectURL(file)}
}

export default useUpdateAvatar;