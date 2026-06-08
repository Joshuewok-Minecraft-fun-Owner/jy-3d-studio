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
    deleteDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = ${{ secrets.FIREBASE_CONFIG }};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, addDoc, onSnapshot, query, where, orderBy, updateDoc, doc, getDoc, deleteDoc };
