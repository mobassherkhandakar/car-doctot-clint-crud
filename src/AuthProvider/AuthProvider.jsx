import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSigin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const onvisit = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      const logdingUser = {
        email: currentUser.email,
      };
      fetch("https://car-doctor-server-ecru-nine.vercel.app/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(logdingUser),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("jwt data", data);
          localStorage.setItem("car-access-token", data.token);
        });
    });
    return () => {
      return onvisit();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    loginUser,
    logOut,
    googleSigin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
