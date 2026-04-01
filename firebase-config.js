// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbPEHhZb1dASOjgZAbUP_g1AbI6wmZCzw",
  authDomain: "jy-3d-design-studio.firebaseapp.com",
  projectId: "jy-3d-design-studio",
  storageBucket: "jy-3d-design-studio.firebasestorage.app",
  messagingSenderId: "307590724871",
  appId: "1:307590724871:web:770275eb0beacb6c4899a2",
  measurementId: "G-TSN1PQRNMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot, query, where, orderBy, updateDoc, doc, deleteDoc };