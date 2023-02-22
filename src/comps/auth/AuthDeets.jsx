import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState} from "react";
import { auth } from "../../firebase/config";

const AuthDeets = () => {

    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else (
                setAuthUser(null)
            )
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () =>{
        signOut(auth).then(() =>{
            console.log('sign out successful')
        }).catch((error => console.log(error)))
    }


    return (
        <div>{authUser ? <> <br/><p>{`Signed In as ${authUser.email}`}</p> <button onClick={userSignOut}>Sign Out</button></> : <> <br /><p>Signed Out</p> </>} </div>
    )
}

export default AuthDeets;