import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();


export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState("");


  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const unsubscribeFromAuth = () => null;

  function login(email, password) {
    auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUser(user));

    return () => unsubscribeFromAuth();
  }, []);

    useEffect(() => {
    if (currentUser !== null) {
      currentUser.providerData.forEach(function (profile) {
        setEmail(profile.email);
      });
    }
  }, [currentUser]);

  const value = {
    currentUser,
    email,
    signup,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
