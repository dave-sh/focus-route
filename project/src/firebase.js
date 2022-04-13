import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

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
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

