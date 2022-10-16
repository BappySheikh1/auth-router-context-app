import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../components/firebase/firebase.init';


export const AuthContext =createContext();
const auth =getAuth(app)

const UserContext = ({children}) => {
const [user, setUser]=useState({});
const [lodding, setLodding]=useState(true)
 

// Create user 
const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email , password);
}
// Sing In Google in popup
const googleProvider =new GoogleAuthProvider();

const signInWithGoogle=()=>{
   return signInWithPopup(auth,googleProvider);
}

// LogIn User
const logInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth, email,password)
}
// LogOut 
const logOut=()=>{
  return  signOut(auth)
    
}
// Forget Password
const forgetPassword=(email)=>{
return (
    sendPasswordResetEmail(auth,email)
.then(()=>{
    alert ('please check email and change password')
 })
 .catch(error =>{
   console.log(error);
 })
)
}


// why are we doing this?
useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth,(currentUser) =>{
       setUser(currentUser)
    //    console.log(currentUser);
    setLodding(false)
    });
    return ()=>{
        unsubscribe();
    }
},[])

    const authInfo= {user, createUser,logInUser,logOut,signInWithGoogle,lodding,forgetPassword}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;