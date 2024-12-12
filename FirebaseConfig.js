// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTxpfyIWZKFvypbVHsS6dptWIMslHDbiI",
  authDomain: "calculator-app-ccca4.firebaseapp.com",
  projectId: "calculator-app-ccca4",
  storageBucket: "calculator-app-ccca4.firebasestorage.app",
  messagingSenderId: "659213422658",
  appId: "1:659213422658:web:f8f927590a573a805f9ddb",
  measurementId: "G-8KKVLEGKD9"
};

// Initializing firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

