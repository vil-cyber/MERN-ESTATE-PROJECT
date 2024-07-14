// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-state-796d5.firebaseapp.com",
  projectId: "mern-state-796d5",
  storageBucket: "mern-state-796d5.appspot.com",
  messagingSenderId: "215639681636",
  appId: "1:215639681636:web:4550fad6a49e04ce65cd71"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);