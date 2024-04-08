import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config.js'
export  const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  
    const [user, setUser] = useState();
    

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
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
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;