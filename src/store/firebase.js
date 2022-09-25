import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOCTtfizSKZNUXjxnEEF_spFnFkIdrO6M",
  authDomain: "clone-c6aca.firebaseapp.com",
  projectId: "clone-c6aca",
  storageBucket: "clone-c6aca.appspot.com",
  messagingSenderId: "967805116155",
  appId: "1:967805116155:web:5f0a309b3b3393deea5a5e",
  measurementId: "G-DL0HE0JGYN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const myAuth = {
  auth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
}

export {myAuth};
