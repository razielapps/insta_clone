// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRzjcGCIqqCZKeajeaMjG5tCkUK79qKcI",
  authDomain: "avt-insta.firebaseapp.com",
  projectId: "avt-insta",
  storageBucket: "avt-insta.firebasestorage.app",
  messagingSenderId: "1083178614010",
  appId: "1:1083178614010:web:f6f9acdb0ff00963601d43"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
