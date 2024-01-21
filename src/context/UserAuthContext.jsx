

import { createContext, useState, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase-config';
import { doc, setDoc } from "firebase/firestore";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

//   const navigate = useNavigate();

  const authChecker = () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoggedIn(!!user);
    });

    return () => unsubscribe();
  };

  useEffect(() => {
    authChecker();
  }, []); // Run once on mount

  const signUp = async (name, email, password, age, gender, location, interests, issuesArea) => {
    try {
      const results = await createUserWithEmailAndPassword(auth, email, password);

      const newObject = {
        uid: results.user.uid,
        name,
        email,
        password,
        age: Number(age),
        gender,
        location,
        interests,
        issuesArea
      };

      await setDoc(doc(db, 'users', results.user.uid), newObject);

      authChecker(); // Update loggedIn state
    } catch (error) {
        setErrorMessage(error.message);
      setError(true);
      console.log(error.message);
        
    }
  };

  const handleLogIn = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogOut = async () => {
    try {
      const user = await signOut(auth);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const value = { loggedIn, currentUser, error, errorMessage, signUp, handleLogIn, handleLogOut };

  return (
    <UserAuthContext.Provider value={{ value }}>
      {children}
    </UserAuthContext.Provider>
  );
};
