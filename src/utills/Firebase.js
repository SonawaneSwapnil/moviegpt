// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC91ewPhWAxewQkf2upD-PqLvyyD2N5kjw",
  authDomain: "moviegpt-b5767.firebaseapp.com",
  projectId: "moviegpt-b5767",
  storageBucket: "moviegpt-b5767.appspot.com",
  messagingSenderId: "472381696701",
  appId: "1:472381696701:web:cd4965443cec1e91cea5d4",
  measurementId: "G-8W9YZGTN5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();