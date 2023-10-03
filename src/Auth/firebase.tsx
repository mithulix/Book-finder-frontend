// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcQmEPGnuqJJAD9qgBD6HYZZjIAVdyYUc",
  authDomain: "book-finder-4401d.firebaseapp.com",
  projectId: "book-finder-4401d",
  storageBucket: "book-finder-4401d.appspot.com",
  messagingSenderId: "518724476054",
  appId: "1:518724476054:web:8d527bc78b138b8e6bf6b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
