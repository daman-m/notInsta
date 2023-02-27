import { useToast } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { USERDASH } from 'Routes/routes';
import { auth } from '../firebase/config';



const useAuth = () => {

    const [authUser, isLoading, error] = useAuthState(auth); 

 return {user: authUser, isLoading, error };
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