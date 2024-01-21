// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdYsrMcJV7S35RCQhcgdaaHHi6FQmCl70",
  authDomain: "group-project-4554c.firebaseapp.com",
  projectId: "group-project-4554c",
  storageBucket: "group-project-4554c.appspot.com",
  messagingSenderId: "490078204313",
  appId: "1:490078204313:web:1a671f47daef84d608a308",
  measurementId: "G-5R8RMWH1RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
