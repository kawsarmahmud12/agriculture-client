import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase-config';

const provider = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // new user create
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user login
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    // log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // logIn with google 
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // sign In with github
    const signInWithGithub = () =>{
        setLoading(true)
        return signInWithPopup(auth, providerGithub)
    }

    // Update user
    // const updateUser = (name, photoUrl)=>{
    //     setLoading(true);
    //     return updateProfile(auth.currentUser,{
    //         displayName: name,
    //         photoURL: photoUrl
    //     });
    // }



    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        // updateUser,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;