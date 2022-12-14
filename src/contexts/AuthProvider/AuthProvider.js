import React from 'react';
import { createContext } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin =(provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn =(email, password, photoURL) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password, photoURL)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

   const updateUserProfile = (profile) =>{
    return updateProfile(auth.currentUser, profile)
   }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user inside change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return ()=>{
            unsubscribe();
        }

    }, [])

    const authInfo = {user, providerLogin, logOut, createUser, logIn, updateUserProfile, loading};

    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;