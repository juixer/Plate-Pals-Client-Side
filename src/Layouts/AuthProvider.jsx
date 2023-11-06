import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // google provider
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // Create user by email
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update user
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // sign in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // authINFO
  const authInfo = {
    googleLogin,
    user,
    createUser,
    updateUser,
    signIn,
    loading,
    logOut,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // JWT
      const loggedEmail = currentUser?.email || user?.email;
      if (currentUser) {
        const user = { email: loggedEmail };
        axios.post("https://platepals.vercel.app/jwt", user, {
          withCredentials: true,
        });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user]);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
