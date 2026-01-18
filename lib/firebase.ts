import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxLZbl3B-kvIRI-cecc_Fn8SIJy4j8nJY",
    authDomain: "ghanry-web.firebaseapp.com",
    projectId: "ghanry-web",
    storageBucket: "ghanry-web.firebasestorage.app",
    messagingSenderId: "770525264308",
    appId: "1:770525264308:web:5002d93fc36a8ab21a9ae1"
};

// Initialize Firebase (Singleton pattern to avoid multiple instances in Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Authentication is NOT used in this app (we use custom Firestore implementation)
// Disabling getAuth() prevents "400 Bad Request" errors on Identity Platform
const auth = null; // getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
