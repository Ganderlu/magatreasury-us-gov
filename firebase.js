// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app"; 
import { getAnalytics } from "firebase/analytics"; 
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = { 
  apiKey: "AIzaSyAG3nKhIyqfTZb2ibahnvwkR0QC3wHkmZE", 
  authDomain: "magatreasure.firebaseapp.com", 
  databaseURL: "https://magatreasure-default-rtdb.firebaseio.com", 
  projectId: "magatreasure", 
  storageBucket: "magatreasure.firebasestorage.app", 
  messagingSenderId: "635543945112", 
  appId: "1:635543945112:web:975251faf18439980475ed", 
  measurementId: "G-1D3BXQK8G8" 
}; 
 
// Initialize Firebase 
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
