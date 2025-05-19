import { useState } from "react";
import { AuthContext } from "../Context";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth } from "../../firebase"



const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const createUserWithEmailPassword = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signInUserWithEmailPassword = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUserWithEmailPassword,
    signInUserWithEmailPassword

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;