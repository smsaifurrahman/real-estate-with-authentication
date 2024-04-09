import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config.js'
export  const AuthContext = createContext(null);
const auth = getAuth(app);
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const provider = new GithubAuthProvider();



const AuthProvider = ({children}) => {
  
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    
    const logIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Social media login
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn =() => {
        setLoading(true)

        return signInWithPopup(auth, gitHubProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createUser,
        logIn,
        logOut,
        googleSignIn,
        githubSignIn,
        setLoading,
        loading,
        auth
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;