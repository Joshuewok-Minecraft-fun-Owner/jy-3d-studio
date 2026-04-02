import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    onSnapshot, 
    query, 
    where, 
    orderBy, 
    updateDoc, 
    doc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbPEHhZb1dASOjgZAbUP_g1AbI6wmZCzw",
  authDomain: "jy-3d-design-studio.firebaseapp.com",
  projectId: "jy-3d-design-studio",
  storageBucket: "jy-3d-design-studio.appspot.com",
  messagingSenderId: "307590724871",
  appId: "1:307590724871:web:770275eb0beacb6c4899a2",
  measurementId: "G-TSN1PQRNMT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, addDoc, onSnapshot, query, where, orderBy, updateDoc, doc, getDoc };