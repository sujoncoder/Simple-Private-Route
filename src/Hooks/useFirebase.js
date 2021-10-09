import { useState,useEffect } from "react/cjs/react.development"
import initializeAuthentication from "../Firebase/Firebase-init";
import { GoogleAuthProvider, getAuth, signInWithPopup,onAuthStateChanged,signOut,GithubAuthProvider  } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState ({});
    const [error,setError] = useState ({});

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    

    const googleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
        .then((result) =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch((error)=>{
            console.log(error.messege)
            setError(error.messege)
           
        })
    }
    
    const githubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            setUser(result.user)
        })
    }

    const auth = getAuth();
    const logout = ()=>{
        signOut(auth)
        .then(() => {
            setUser({})
        })   
    }

    useEffect (()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, user => {
           if(user){
               console.log(user)
               setUser(user)
           }
       })
    },[])
    return {
        user,
        error,
        googleSignIn,
        githubSignIn,
        logout
    }
}
export default useFirebase;