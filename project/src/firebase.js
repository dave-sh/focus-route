// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3B4qnZCFrYjn3fQQmi7QdVMACcOYlgL0",
  authDomain: "focusroutedb.firebaseapp.com",
  databaseURL: "https://focusroutedb-default-rtdb.firebaseio.com",
  projectId: "focusroutedb",
  storageBucket: "focusroutedb.appspot.com",
  messagingSenderId: "10618160447",
  appId: "1:10618160447:web:a1040a7e8d0eb3c506bf8a",
  measurementId: "G-VQ0H8VS262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;