import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6mKnP9m57OpWNqGnvyCMlP9-pBuJK618",
    authDomain: "roloi-arismendi.firebaseapp.com",
    projectId: "roloi-arismendi",
    storageBucket: "roloi-arismendi.appspot.com",
    messagingSenderId: "631746017162",
    appId: "1:631746017162:web:ab8c0b9b52932aeee13a73"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);