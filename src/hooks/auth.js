import { useToast } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { LOGIN, USERDASH } from '../Routes/routes';
import { auth, projectFireStore } from '../firebase/config';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import isUsernameExists from "../utility/isUsernameExists";
import { useEffect } from 'react';

const useAuth = () => {

    const [authUser, authLoading, error] = useAuthState(auth); 
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        async function fetchData() {
            setIsLoading(true)
            const ref = doc(projectFireStore, "users", authUser.uid);

            const docSnap = await getDoc(ref);
            setUser(docSnap.data())
            setIsLoading(!isLoading)
            
        }

        if(!authLoading) {
            if (authUser) fetchData()
            else setIsLoading(false); //Not signed in 
        }
    },[authLoading, authUser, isLoading])

 return {user , authLoading, error };
}

export const useLogin = () => {

    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    async function login({email, password, redirectTo=USERDASH}) {
        setIsLoading(true);

        try {

        await signInWithEmailAndPassword(auth, email, password)

        toast({
            title: "You are logged In",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000
        });
        navigate(redirectTo);
        }
        catch(error) {
            toast({
                title: "Logging in failed",
                description: error.message,
                status: "error",
                isClosable: true,
                position: "top",
                duration: 5000
            });
            setIsLoading(false)
            return false; // Return false if login failed
        }

        setIsLoading(false)
        return true // Return true if login successful
    }

    return {login, isLoading}
}

export default useAuth;

export const useRegister = () => {

    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    async function register({username, email, password, redirectTo = USERDASH}) {
        setIsLoading(true)

        const usernameExists =  await isUsernameExists(username)

        if (usernameExists) {
            toast({
                title: "Username already exists",
                status:"error",
                isClosable: true,
                position: "top",
                duration: 5000
            });
            setIsLoading(false);
        } else {
            try{
                const res = await createUserWithEmailAndPassword(auth, email, password)

                await setDoc(doc(projectFireStore, "users", res.user.uid), {
                    id: res.user.uid,
                    username: username.toLowerCase(),
                    userUploads: [],
                    date: Date.now(),
                    avatar: ""
                });

                toast({
                    title: "Account created",
                    status:"success",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                });

                navigate(redirectTo);

            } catch (error) {
                toast({
                    title: "Sign up failed",
                    status:"error",
                    description: error.message,
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                });
            }
            finally {
                setIsLoading(false)
            }
        }
    }
    return {register, isLoading};
}

export const useLogout = () => {
    const [signOut, isLoading ] = useSignOut(auth);
    const toast = useToast();
    const navigate = useNavigate();


    async function logout() {
            if (await signOut()) {
                toast({
                    title: "Successfully logged out",
                    status: "success",
                    isClosable: true,
                    position: "top",
                    duration: 5000
                })
                navigate(LOGIN);
            }
    }
    return { logout, isLoading};
}